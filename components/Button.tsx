type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`hover-shadow m-2 inline-block cursor-pointer font-semibold rounded-sm outline-none px-4 py-2 border border-primary dark:border-primary-dark bg-background dark:bg-background-dark ${className}`}
    >
      {children}
    </button>
  )
}
