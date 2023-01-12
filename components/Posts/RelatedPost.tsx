import { MDXComponents } from 'components/MDXComponents/MDXComponents'
import { Paragraph } from 'components/MDXComponents/Paragraph'
import { Post } from 'contentlayer/generated'
import { FeaturedPost } from './FeaturedPost'

const RelatedMDXComponents = {
  ...MDXComponents,
  // Make text smaller on related post cards for a more compact look.
  p: (props: any) => <Paragraph {...props} className="text-sm" />,
  h2: (props: any) => <h2 {...props} className="text-2xl mt-6" />,
  h3: (props: any) => <h3 {...props} className="text-xl mt-6" />,
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
