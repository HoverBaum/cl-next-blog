/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post as ContentlayerPost } from 'contentlayer/generated'
import { ComponentType } from 'react'
import { MDXComponents } from './MDXComponents/MDXComponents'

type PostProps = {
  post: ContentlayerPost
}

export const BlogPost: ComponentType<PostProps> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article
      css={css`
        padding-bottom: 2rem;
      `}
    >
      <h1>{post.title}</h1>
      <MDXContent components={MDXComponents} />
    </article>
  )
}
