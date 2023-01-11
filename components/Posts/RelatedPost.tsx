import { MDXComponents } from 'components/MDXComponents/MDXComponents'
import { Paragraph } from 'components/MDXComponents/Paragraph'
import { Post } from 'contentlayer/generated'
import { FeaturedPost } from './FeaturedPost'

const RelatedMDXComponents = {
  ...MDXComponents,
  p: (props: any) => <Paragraph {...props} className="text-sm" />,
}

export const RelatedPost = ({ post }: { post: Post }) => {
  return (
    <FeaturedPost
      post={post}
      variant="compact"
      MDXComponents={RelatedMDXComponents}
    />
  )
}
