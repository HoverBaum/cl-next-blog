/**
 * A Blogpost featured either big or small.
 * The big version contains more information and the first image of the post if any.
 * The small variant only contains the first paragraph.
 * Both have a "read more" CTA.
 */

import { Img } from 'components/MDXComponents/Img'
import { Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import { MDXComponents as DefaultMDXComponent } from 'components/MDXComponents/MDXComponents'
import { Card } from 'components/Card'
import { PostMeta } from './PostMeta'

type PostCardProps = {
  post: Post
  variant?: 'default' | 'compact'
  MDXOverwrites?: any
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  variant = 'default',
  MDXOverwrites,
}) => {
  const MDXContent = useMDXComponent(post.excerpt.code)
  const { title, slug } = post

  const mergedComponetns = {
    ...DefaultMDXComponent,
    // We make headings a bit smaller to fit witht he h3 used for titles in cards.
    h2: (props: any) => <h2 {...props} className="text-2xl mt-6" />,
    h3: (props: any) => <h3 {...props} className="text-xl mt-6" />,
    ...MDXOverwrites,
  }

  return (
    <Card className={`h-full relative break-words`}>
      <h3 className={`mt-0 ${variant === 'compact' ? 'text-3xl' : ''}`}>
        <Link href={slug}>
          <a>{title}</a>
        </Link>
      </h3>
      <PostMeta post={post} />
      {post.firstImage && (
        <Img src={post.firstImage.src} alt={post.firstImage.alt} />
      )}
      <MDXContent components={mergedComponetns} />

      {/* Adding the read more always at the bottom and same bottom.
      One div creates the space, the other positions the link. */}
      <div className="h-8"></div>
      <div className={`text-center w-full absolute bottom-4 left-0`}>
        <Link href={post.slug}>…continue reading</Link>
      </div>
    </Card>
  )
}
