// Deno Script

const parseFrontmatter = (rawContent: string) => {
  const normalizedContent = rawContent.replace(/\r\n/g, '\n')
  const frontmatterMatch = normalizedContent.match(
    /^---\n([\s\S]*?)\n---\n?[\s\S]*$/
  )
  if (!frontmatterMatch) return {}

  const frontmatter = frontmatterMatch[1]
  return frontmatter.split('\n').reduce((acc, line) => {
    const keyValueMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/)
    if (!keyValueMatch) return acc
    const key = keyValueMatch[1]
    const value = keyValueMatch[2]
    acc[key] = value
    return acc
  }, {} as Record<string, string>)
}

const collectMdxFiles = async (directory: string) => {
  const files: string[] = []
  for await (const entry of Deno.readDir(directory)) {
    const entryPath = `${directory}/${entry.name}`
    if (entry.isDirectory) {
      files.push(...(await collectMdxFiles(entryPath)))
      continue
    }
    if (entry.isFile && entry.name.endsWith('.mdx')) {
      files.push(entryPath)
    }
  }
  return files
}

const postsDir = '../posts'
const postFiles = await collectMdxFiles(postsDir)

// Map all posts onto nextjs redirects and save them to a json file.
const redirects = []
for (const filePath of postFiles) {
  const rawPost = await Deno.readTextFile(filePath)
  const frontmatter = parseFrontmatter(rawPost)
  if (!frontmatter.date) continue

  const postDate = new Date(frontmatter.date)
  const year = postDate.getFullYear()
  const month = postDate.getMonth().toString().padStart(2, '0')
  const day = postDate.getDay().toString().padStart(2, '0')
  const postSlug = filePath.split('/').at(-1)?.replace(/\..+?$/, '')
  if (!postSlug) continue
  redirects.push({
    source: `/${year}/${month}/${day}/${postSlug}/`,
    destination: `/posts/${postSlug}`,
    permanent: true,
  })
}

await Deno.writeTextFile(
  './redirects.mjs',
  `
export const oldBlogRedirects = JSON.parse('${JSON.stringify(redirects)}')
`
)
