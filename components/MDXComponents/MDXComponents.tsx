import { Ruler } from 'components/Ruler'
import { Img } from './Img'
import { MDXLink } from './MDXLink'
import { Paragraph } from './Paragraph'

export const MDXComponents = {
  Img,
  img: Img,
  p: Paragraph,
  a: MDXLink,
  h2: (props: any) => (
    <>
      <h2 {...props} />
      <Ruler className="-mt-3" />
    </>
  ),
}
