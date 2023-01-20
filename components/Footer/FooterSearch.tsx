'use client'

import { SearchIcon } from 'components/Icons/SearchIcon'
import { useKBar } from 'kbar'

export const FooterSearch = () => {
  const { query } = useKBar()

  return (
    <div className="relative flex items-center w-full h-8 rounded-lg bg-background dark:bg-background-dark overflow-hidden border border-border">
      <div className="grid place-items-center h-full w-12 text-text dark:text-text-dark">
        <SearchIcon className="h-6 w-6" />
      </div>

      <input
        // You can't tab this!
        tabIndex={-1}
        className="peer h-full w-full outline-none text-sm bg-surface dark:bg-surface-dark text-text dark:text-text-dark px-2"
        type="text"
        id="search"
        placeholder="Search something... (cmd + K)"
        onClick={(e) => {
          //@ts-ignore
          e.target.blur()
          query.toggle()
        }}
      />
    </div>
  )
}
