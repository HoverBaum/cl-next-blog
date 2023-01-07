import { MDXComponents } from 'components/MDXComponents/MDXComponents'

export const FeaturesMDXComponents = {
  ...MDXComponents,
  // We stripp the Anchors from headlines for Featured Posts cards.
  h2: (props: any) => <h2 {...props}>{props.children}</h2>,
  h3: (props: any) => <h3 {...props}>{props.children}</h3>,
}
