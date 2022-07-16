/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post as ContentlayerPost } from 'contentlayer/generated'
import { ComponentType } from 'react'
import { MDXComponents } from './MDXComponents/MDXComponents'
import { Headline } from './baum-ui'
import { format, parseISO } from 'date-fns'

type PostProps = {
  post: ContentlayerPost
}

export const BlogPost: ComponentType<PostProps> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)
  const { tags, date, categories } = post

  return (
    <article
      css={css`
        padding-bottom: 2rem;
      `}
    >
      <Headline>{post.title}</Headline>
      <div>
        {categories &&
          categories.length > 0 &&
          categories.map((cat) => <span key={cat}>{cat} </span>)}
      </div>
      <div>
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => <span key={tag}>#{tag} </span>)}
      </div>
      {!!date && (
        <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
      )}
      <MDXContent components={MDXComponents} />
    </article>
  )
}
