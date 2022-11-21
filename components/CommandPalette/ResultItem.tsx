import { ActionImpl } from 'kbar'
import React from 'react'

// eslint-disable-next-line react/display-name
export const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
    }: {
      action: ActionImpl
      active: boolean
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={`px-4 py-1 border-l-2 dark:border-background-dark ${
          active ? 'bg-primary-50/20 border-text dark:border-primary-300' : ''
        }`}
      >
        <span>{action.name}</span>
      </div>
    )
  }
)
