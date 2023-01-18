import { Emoji } from './Emoji'

type AlertProps = {
  children: React.ReactNode
}

export const Alert = ({ children }: AlertProps) => {
  return (
    <div
      className="border-2 border-border dark:border-accent-dark text-[1.2em] px-4 py-3 flex "
      role="alert"
    >
      <Emoji className="text-accent dark:text-accent-dark mr-1">!</Emoji>
      <div>{children}</div>
    </div>
  )
}
