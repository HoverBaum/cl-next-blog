import React from 'react'

// eslint-disable-next-line react/display-name
export const KBarCategory = React.forwardRef(
  ({ category }: { category: string }, ref: React.Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className="px-4 py-1">
        <span className="text-sm opacity-75 uppercase">{category}</span>
      </div>
    )
  }
)
