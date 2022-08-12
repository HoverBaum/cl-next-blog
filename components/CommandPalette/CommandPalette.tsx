/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch } from 'kbar'
import { Results } from './Results'

export const CommandPalette = () => {
  return (
    <KBarPortal>
      {/* Renders the content outside the root node */}
      <KBarPositioner
        css={css`
          backdrop-filter: blur(5px);
        `}
      >
        {/* Centers the content */}
        <KBarAnimator
          css={css`
            max-width: 640px;
            width: 100%;
            background: var(--surface2);
            border-radius: 8px;
            overflow: hidden;
          `}
          className="shadow"
        >
          {/* Handles the show/hide and height animations */}
          <KBarSearch
            css={css`
              width: 100%;
              padding: 12px 16px;
              font-size: 16px;
              box-sizing: border-box;
              outline: none;
              border: none;
              background: var(surface1);
              color: var(--text1);
            `}
          />
          <Results />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}
