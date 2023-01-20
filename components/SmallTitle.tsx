type SmallTitleProps = {
  children: React.ReactNode
  className?: string
}

export const SmallTitle = ({ children, className }: SmallTitleProps) => {
  return (
    <h4
      className={` text-primary-600 dark:text-primary-dark font-simonetta ${
        className || 'mt-10 mb-4'
      }`}
    >
      {children}
    </h4>
  )
}
