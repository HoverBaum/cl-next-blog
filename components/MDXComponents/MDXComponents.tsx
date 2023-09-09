import { Ruler } from 'components/Ruler'
import { Img } from './Img'
import { MDXLink } from './MDXLink'
import { Paragraph } from './Paragraph'

export const CustomMDXComponents = {
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
  // Please note the "article blockquote p" stylings in global.css to make this work.
  blockquote: (props: any) => (
    <div className="max-w-p mx-auto">
      <blockquote className="mx-auto max-w-[95%] my-6 px-4 py-1 border-l-4 border-primary dark:border-primary-dark bg-surface dark:bg-surface-dark">
        {props.children}
      </blockquote>
    </div>
  ),
  hr: () => <Ruler className="my-6" />,
}
