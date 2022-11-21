type RulerProps = {
  className?: string
}

export const Ruler = ({ className }: RulerProps) => (
  <hr
    className={`block h-[1px] border-0 border-t-2 border-text/50 dark:border-text-dark my-4 p-0 opacity-30 ${className}`}
  />
)
