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

      h1 {
        ${scaledFontSize(4)};
        font-family: 'Simonetta-Black', serif;
        margin-bottom: 0;
        @media screen and (min-width: 640px) {
          ${scaledFontSize(5)};
        }
      }
      h2 {
        ${scaledFontSize(3)};
        font-family: 'Noto Serif', cursive;
        margin-bottom: 0;
        @media screen and (min-width: 640px) {
          ${scaledFontSize(4)};
        }
      }
      h3 {
        ${scaledFontSize(2)};
        font-family: 'Noto Serif', serif;
        margin-bottom: 0;
        @media screen and (min-width: 640px) {
          ${scaledFontSize(3)};
        }
      }
      h4 {
        ${scaledFontSize(1)};
        font-family: 'Simonetta-Black', serif;
        margin-bottom: 0;
        @media screen and (min-width: 640px) {
          ${scaledFontSize(2)};
        }
      }

      h1 a,
      h2 a,
      h3 a,
      h4 a,
      h5 a {
        text-decoration: none;
      }

      a {
        text-decoration: underline;
      }

      a:hover,
      a:focus {
        color: var(--primary);
        text-decoration: underline;
        transition: 0.3s ease-out;
      }

      hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid var(--text);
        margin: 1em 0;
        padding: 0;
        opacity: 0.33;
      }
    `}
  />
)
