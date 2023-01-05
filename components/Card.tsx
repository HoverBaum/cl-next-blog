import { PropsWithChildren } from 'react'

type CardProps = {
  className?: string
}

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`bg-surface dark:bg-surface-dark border-2 border-border dark:border-border-dark shadow-xl p-4 ${className}`}
    >
      {children}
    </div>
  )
}
