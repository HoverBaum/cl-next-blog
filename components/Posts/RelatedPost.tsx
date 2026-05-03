import { Paragraph } from 'components/MDXComponents/Paragraph'
import { BlogPost } from 'utils/blogPostTypes'
import { PostCard } from './PostCard'

const RelatedMDXComponents = {
  // Make text smaller on related post cards for a more compact look.
  p: (props: any) => <Paragraph {...props} className="text-sm" />,
}

export const RelatedPost = ({ post }: { post: BlogPost }) => {
  return (
    <PostCard
      post={post}
      variant="compact"
      MDXOverwrites={RelatedMDXComponents}
    />
  )
}
