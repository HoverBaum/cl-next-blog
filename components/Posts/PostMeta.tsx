/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { stringToSlug } from 'utils/stringToSlug'

export type PostMetaProps = {
  post: Post
}

export const PostMeta: React.FC<PostMetaProps> = ({ post }) => {
  const { tags, categories, date } = post
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & a {
          text-decoration: none;
        }
        & a:hover {
          text-decoration: underline;
        }
      `}
    >
      <div>
        <div>
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <span
                key={category}
                css={css`
                  margin-right: 0.5rem;
                `}
              >
                <Link href={`/categories/${stringToSlug(category)}`}>
                  {category}
                </Link>
              </span>
            ))}
        </div>
        <div>
          {tags &&
            tags.length > 0 &&
            tags.map((tag) => (
              <span
                key={tag}
                css={css`
                  margin-right: 0.5rem;
                `}
              >
                <Link href={`/tags/${stringToSlug(tag)}`}>{`#${tag}`}</Link>
              </span>
            ))}
        </div>
      </div>
      {!!date && (
        <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
      )}
    </div>
  )
}
