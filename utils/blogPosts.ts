import 'server-only'

import { bundleMDX } from 'mdx-bundler'
import highlight from 'rehype-highlight'
import { cache } from 'react'
import { promises as fs } from 'fs'
import path from 'path'
import type { Pluggable } from 'unified'
import { BlogPost } from './blogPostTypes'

type ParsedFrontmatter = {
  title?: string
  date?: string
  tags?: string[]
  categories?: string[]
  alternativeSlugs?: string[]
}

const SCALAR_FRONTMATTER_KEYS = ['title', 'date'] as const
const LIST_FRONTMATTER_KEYS = [
  'tags',
  'categories',
  'alternativeSlugs',
] as const

type ScalarFrontmatterKey = (typeof SCALAR_FRONTMATTER_KEYS)[number]
type ListFrontmatterKey = (typeof LIST_FRONTMATTER_KEYS)[number]

const isScalarFrontmatterKey = (key: string): key is ScalarFrontmatterKey => {
  return SCALAR_FRONTMATTER_KEYS.includes(key as ScalarFrontmatterKey)
}

const isListFrontmatterKey = (key: string): key is ListFrontmatterKey => {
  return LIST_FRONTMATTER_KEYS.includes(key as ListFrontmatterKey)
}

const MARKDOWN_IMAGE_REGEX = /\!\[(.+?)\]\((.+?)\)/

const isProduction = process.env.VERCEL_ENV === 'production'

const postsRoot = path.join(process.cwd(), 'posts')
const draftsRoot = path.join(process.cwd(), 'drafts')

const directoryExists = async (directory: string) => {
  try {
    await fs.access(directory)
    return true
  } catch {
    return false
  }
}

const toStringArray = (value: unknown) => {
  if (!Array.isArray(value)) return undefined
  return value.filter((entry): entry is string => typeof entry === 'string')
}

const parseFrontmatterValue = (value: string) => {
  const trimmedValue = value.trim()
  if (trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) {
    return trimmedValue.slice(1, -1)
  }
  if (trimmedValue.startsWith("'") && trimmedValue.endsWith("'")) {
    return trimmedValue.slice(1, -1)
  }
  return trimmedValue
}

const parseFrontmatter = (rawContent: string) => {
  const normalizedContent = rawContent.replace(/\r\n/g, '\n')
  const frontmatterMatch = normalizedContent.match(
    /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/
  )

  if (!frontmatterMatch) {
    throw new Error('Missing frontmatter in markdown file.')
  }

  const rawFrontmatter = frontmatterMatch[1]
  const body = frontmatterMatch[2]
  const parsed = rawFrontmatter.split('\n').reduce((acc, line) => {
    const keyValueMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/)
    if (keyValueMatch) {
      const key = keyValueMatch[1]
      const value = keyValueMatch[2]

      if (isListFrontmatterKey(key)) {
        if (value === '') {
          acc.currentKey = key
          acc.data[key] = []
        } else {
          // Allow single-line list values such as "tags: React".
          acc.currentKey = undefined
          acc.data[key] = [parseFrontmatterValue(value)]
        }
      } else if (isScalarFrontmatterKey(key)) {
        acc.currentKey = undefined
        acc.data[key] = parseFrontmatterValue(value)
      }
      return acc
    }

    const listValueMatch = line.match(/^\s*-\s+(.*)$/)
    if (listValueMatch && acc.currentKey) {
      const currentValue = acc.data[acc.currentKey]
      if (Array.isArray(currentValue)) {
        currentValue.push(parseFrontmatterValue(listValueMatch[1]))
      }
    }

    return acc
  }, {
    data: {} as ParsedFrontmatter,
    currentKey: undefined as ListFrontmatterKey | undefined,
  })

  return {
    frontmatter: parsed.data,
    body,
  }
}

const extractExcerpt = (rawBody: string) => {
  const lines = rawBody
    .replace(/\r\n/g, '\n')
    .split('\n\n')
    .filter((line) => line !== '')

  const excerptLines = lines.reduce<string[]>((acc, line) => {
    if (MARKDOWN_IMAGE_REGEX.test(line)) return acc
    if (acc.join(' ').length > 300) return acc
    return acc.concat(line)
  }, [])

  if (excerptLines.length > 0 && /^#/.test(excerptLines[excerptLines.length - 1])) {
    excerptLines.pop()
  }

  return excerptLines.join('\n\n')
}

const extractFirstImage = (rawBody: string) => {
  const lines = rawBody.split('\n\n').filter((line) => line !== '')
  const firstImageLine = lines.find((line) => MARKDOWN_IMAGE_REGEX.test(line))
  if (!firstImageLine) return undefined

  const match = firstImageLine.match(MARKDOWN_IMAGE_REGEX)
  if (!match) return undefined

  return {
    alt: match[1],
    src: match[2],
  }
}

const compileMdx = async (source: string) => {
  const highlightPlugin = highlight as unknown as Pluggable
  const compiled = await bundleMDX({
    source,
    mdxOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), highlightPlugin]
      return options
    },
  })

  return {
    code: compiled.code,
  }
}

const collectMdxFiles = async (directory: string): Promise<string[]> => {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        return collectMdxFiles(fullPath)
      }
      if (entry.isFile() && fullPath.endsWith('.mdx')) {
        return [fullPath]
      }
      return []
    })
  )
  return files.flat()
}

const loadPostsFromDirectory = async (
  directory: string,
  status: BlogPost['status']
): Promise<BlogPost[]> => {
  const files = await collectMdxFiles(directory)
  const posts = await Promise.all(
    files.map(async (filePath) => {
      const rawContent = await fs.readFile(filePath, 'utf8')
      const { frontmatter, body } = parseFrontmatter(rawContent)
      const sourceFileName = path.basename(filePath)
      const postSlug = sourceFileName.replace(/\.mdx$/, '')

      if (!frontmatter.title || !frontmatter.date) {
        throw new Error(`Missing title or date in ${filePath}`)
      }

      const [excerpt, bodyContent] = await Promise.all([
        compileMdx(extractExcerpt(body)),
        compileMdx(body),
      ])

      return {
        _id: path.relative(process.cwd(), filePath),
        title: frontmatter.title,
        date: frontmatter.date,
        categories: toStringArray(frontmatter.categories),
        tags: toStringArray(frontmatter.tags),
        alternativeSlugs: toStringArray(frontmatter.alternativeSlugs),
        status,
        slug: `/posts/${postSlug}`,
        postSlug,
        excerpt,
        body: bodyContent,
        firstImage: extractFirstImage(body),
        sourceFileName,
      } satisfies BlogPost
    })
  )

  return posts
}

export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const directories: Array<{
    path: string
    status: BlogPost['status']
  }> = [{ path: postsRoot, status: 'published' }]
  if (!isProduction) {
    if (await directoryExists(draftsRoot)) {
      directories.push({ path: draftsRoot, status: 'draft' })
    }
  }

  const posts = await Promise.all(
    directories.map(({ path: sourcePath, status }) =>
      loadPostsFromDirectory(sourcePath, status)
    )
  )

  return posts.flat()
})
