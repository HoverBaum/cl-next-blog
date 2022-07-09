/** @jsxImportSource @emotion/react */
import { Paragraph as BaumParagraph } from 'components/baum-ui'
import React, { PropsWithChildren } from 'react'

export const Paragraph: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  if (typeof children === 'string')
    return <BaumParagraph>{children}</BaumParagraph>
  return <>{children}</>
}
