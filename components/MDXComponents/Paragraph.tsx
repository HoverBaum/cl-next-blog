import React, { PropsWithChildren } from 'react'

export const Paragraph: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  if (typeof children === 'object' && children) {
    const isImage =
      //@ts-ignore
      children.props &&
      //@ts-ignore
      children.props.src &&
      //@ts-ignore
      /(jpg|jpeg|png|webp|gif|webm)$/i.test(children.props.src)
    if (isImage) {
      return <>{children}</>
    }
  }

  return <p className="text-justify font-noto max-w-p mx-auto">{children}</p>
}
