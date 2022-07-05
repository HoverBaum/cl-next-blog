/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post as ContentlayerPost } from 'contentlayer/generated'
import { ComponentType } from 'react'
import { MDXComponents } from './MDXComponents/MDXComponents'
import { Headline } from './baum-ui'

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
      <Headline>{post.title}</Headline>
      <MDXContent components={MDXComponents} />
    </article>
  )
}
