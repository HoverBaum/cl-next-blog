import React, { PropsWithChildren } from 'react'

type ParagraphProps = {
  className?: string
}

export const Paragraph: React.FC<PropsWithChildren<ParagraphProps>> = ({
  children,
  className,
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

  return (
    <p className={`text-justify font-notoSans max-w-p mx-auto ${className}`}>
      {children}
    </p>
  )
}
