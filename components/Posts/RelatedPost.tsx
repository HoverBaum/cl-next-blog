import { Paragraph } from 'components/MDXComponents/Paragraph'
import { Post } from 'contentlayer/generated'
import { PostCard } from './PostCard'

const RelatedMDXComponents = {
  // Make text smaller on related post cards for a more compact look.
  p: (props: any) => <Paragraph {...props} className="text-sm" />,
}

export const RelatedPost = ({ post }: { post: Post }) => {
  return (
    <PostCard
      post={post}
      variant="compact"
      MDXOverwrites={RelatedMDXComponents}
    />
  )
}
