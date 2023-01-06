import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post as ContentlayerPost } from 'contentlayer/generated'
import { ComponentType } from 'react'
import { MDXComponents } from '../MDXComponents/MDXComponents'
import { PostMeta } from './PostMeta'
import { Ruler } from 'components/Ruler'

type PostProps = {
  post: ContentlayerPost
}

export const BlogPost: ComponentType<PostProps> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="pb-7">
      <h1>{post.title}</h1>
      <PostMeta post={post} />
      <Ruler />
      <MDXContent components={MDXComponents} />
    </article>
  )
}
