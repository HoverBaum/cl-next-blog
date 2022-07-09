/** @jsxImportSource @emotion/react */
import { Paragraph as BaumParagraph } from 'components/baum-ui'
import React, { PropsWithChildren } from 'react'

export const Paragraph: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  if (typeof children === 'object' && children) {
    //@ts-ignore
    const isImage = children.props && children.props.src && children.props.alt
    if (isImage) {
      return <>{children}</>
    }
  }

  return <BaumParagraph>{children}</BaumParagraph>
}
