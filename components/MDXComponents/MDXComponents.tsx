import { Ruler } from 'components/Ruler'
import { Anchor } from './Anchor'
import { Img } from './Img'
import { MDXLink } from './MDXLink'
import { Paragraph } from './Paragraph'

export const MDXComponents = {
  Img,
  img: Img,
  p: Paragraph,
  a: MDXLink,
  h2: (props: any) => (
    <h2 className="relative" {...props}>
      <Anchor id={props.children}>##</Anchor> {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 className="relative" {...props}>
      <Anchor id={props.children}>###</Anchor> {props.children}
    </h3>
  ),
  hr: () => <Ruler className="my-6" />,
}
