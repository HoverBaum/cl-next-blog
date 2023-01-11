type SmallTitleProps = {
  children: React.ReactNode
  className?: string
}

export const SmallTitle = ({ children, className }: SmallTitleProps) => {
  return (
    <h4
      className={`mt-10 mb-4 text-primary-600 dark:text-primary-dark font-simonetta ${className}`}
    >
      {children}
    </h4>
  )
}
