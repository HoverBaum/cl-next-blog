import { css, Global } from '@emotion/react'
import {
  highlightDarkStyles,
  highlightLightStyles,
} from 'utils/hightlightStyles'

const baseFontSize = '1rem'
const fontRatio = 1.33

export const scaledFontSize = (scale: number) => {
  return css`
    font-size: calc(${baseFontSize} * ${Math.pow(fontRatio, scale)});
  `
}

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        --image-filter-dark: grayscale(10%);
      }

      :root {
        --image-filter: var(--image-filter-light);
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --image-filter: var(--image-filter-dark);
        }
      }

      // Code highlihgting.

      // light
      ${highlightLightStyles}
      @media (prefers-color-scheme: dark) {
        ${highlightDarkStyles}
      }
      .hljs {
        display: block;
        background-color: var(--surface);
      }

      pre {
        overflow-x: auto;
        background-color: var(--surface);
        padding: 0.5rem;
        border: var(--border);
      }
    `}
  />
)
