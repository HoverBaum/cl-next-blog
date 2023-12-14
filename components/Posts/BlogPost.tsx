import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post as ContentlayerPost } from 'contentlayer/generated'
import { ComponentType } from 'react'
import { CustomMDXComponents } from '../MDXComponents/MDXComponents'
import { PostMeta } from './PostMeta'
import { Ruler } from 'components/Ruler'
import { Alert } from 'components/Alert'

type PostProps = {
  post: ContentlayerPost
}

export const BlogPost: ComponentType<PostProps> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)
  const threeYearsAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 3)
  )
  const isConsideredOutdated = new Date(post.date) < threeYearsAgo

  return (
    <article className="pb-8">
      <h1 className="mb-2">{post.title}</h1>
      <PostMeta post={post} />
      {isConsideredOutdated && (
        <Alert>
          {`This Post is over three years old! It's information or views might be
          outdated.`}
        </Alert>
      )}
      {!isConsideredOutdated && <Ruler />}
      <div className="mt-8"></div>
      <MDXContent
        // Hacky solution here, needs updating! TODO
        components={CustomMDXComponents as unknown as MDXComponents}
      />
    </article>
  )
}
