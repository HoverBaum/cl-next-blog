import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch } from 'kbar'
import { Results } from './Results'

export const CommandPalette = () => {
  return (
    <KBarPortal>
      {/* Renders the content outside the root node */}
      <KBarPositioner className="backdrop-blur-sm">
        {/* Centers the content */}
        <KBarAnimator className="max-w-2xl w-full bg-surface dark:bg-surface-dark rounded-lg overflow-hidden border-border dark:border-border-dark shadow-lg">
          {/* Handles the show/hide and height animations */}
          <KBarSearch className="px-4 py-1 w-full outline-none border-0 border-b-2 " />
          <Results />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}
