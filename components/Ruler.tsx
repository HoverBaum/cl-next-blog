type RulerProps = {
  className?: string
}

export const Ruler = ({ className }: RulerProps) => (
  <hr
    className={`block h-[1px] border-0 border-t-2 border-border dark:border-border-dark p-0 opacity ${className}`}
  />
)
