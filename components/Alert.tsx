type AlertProps = {
  children: React.ReactNode
}

export const Alert = ({ children }: AlertProps) => {
  return (
    <div
      className="bg-accent dark:bg-accent-dark border border-border dark:border-border-dark font-semibold text-[1.2em] px-4 py-3 "
      role="alert"
    >
      {children}
    </div>
  )
}
