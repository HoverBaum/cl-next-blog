import { Ruler } from 'components/Ruler'
import { Img } from './Img'
import { MDXLink } from './MDXLink'
import { Paragraph } from './Paragraph'

export const MDXComponents = {
  Img,
  img: Img,
  p: Paragraph,
  a: MDXLink,
  h2: (props: any) => <h2 {...props}>{props.children}</h2>,
  h3: (props: any) => (
    // TODO: Find a better way to make this headline and paragraphs the same width.
    <h3 className="max-w-[751px] mx-auto" {...props}>
      {props.children}
    </h3>
  ),
  ol: (props: any) => (
    <ol className="list-decimal max-w-p mx-auto pl-6" {...props} />
  ),
  ul: (props: any) => (
    <ol className="list-disc max-w-p mx-auto pl-6" {...props} />
  ),
  hr: () => <Ruler className="my-6" />,
}
