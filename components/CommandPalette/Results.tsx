import { KBarResults, useMatches } from 'kbar'
import { useEffect } from 'react'
import { KBarCategory } from './KBarCategory'
import { ResultItem } from './ResultItem'

export const Results = () => {
  const { results, rootActionId } = useMatches()

  // Fix a bug where initially the view is often scrolled down a bit.
  useEffect(() => {
    const element = document.querySelector('#kbar-listbox')
    const scrollContainer = element?.parentNode as HTMLElement
    scrollContainer.scrollTo(0, 0)
  }, [])

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <KBarCategory category={item} />
        ) : (
          <ResultItem
            active={active}
            action={item}
            currentRootActionId={rootActionId || undefined}
          />
        )
      }
    />
  )
}
