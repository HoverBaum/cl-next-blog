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
    <div className="mb-4 text-sm md:flex flex-row justify-between">
      <div>
        <div>
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <span key={category} className="mr-1">
                <Link href={`/categories/${stringToSlug(category)}`}>
                  <a className="no-underline hover:underline">
                    {category.toUpperCase()}
                  </a>
                </Link>
              </span>
            ))}
        </div>
        <div>
          {tags &&
            tags.length > 0 &&
            tags.map((tag) => (
              <span key={tag} className="mr-0.5">
                <Link href={`/tags/${stringToSlug(tag)}`}>
                  <a className="no-underline hover:underline">{`#${tag}`}</a>
                </Link>
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
