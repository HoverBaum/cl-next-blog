export type CompiledMdx = {
  code: string
}

export type BlogPostStatus = 'published' | 'draft'

export type BlogPost = {
  _id: string
  title: string
  date: string
  categories?: string[]
  tags?: string[]
  alternativeSlugs?: string[]
  status: BlogPostStatus
  slug: string
  postSlug: string
  excerpt: CompiledMdx
  body: CompiledMdx
  firstImage?: {
    src: string
    alt: string
  }
  sourceFileName: string
}
