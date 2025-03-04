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
    <div className="mb-4 text-sm ">
      <div className="md:flex flex-row flex-wrap justify-between">
        <div>
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <span key={category} className="mr-1">
                <Link
                  href={`/posts/categories/${stringToSlug(category)}`}
                  className="no-underline hover:underline"
                >
                  {category.toUpperCase()}
                </Link>
              </span>
            ))}
        </div>
        {!!date && (
          <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
        )}
      </div>
      <div className="flex flex-row flex-wrap">
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => (
            <span key={tag} className="mr-0.5">
              <Link
                href={`/posts/tags/${stringToSlug(tag)}`}
                className="no-underline hover:underline"
              >
                {`#${tag}`}
              </Link>
            </span>
          ))}
      </div>
    </div>
  )
}
