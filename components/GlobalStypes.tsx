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
      //https://fonts.google.com/share?selection.family=Noto%20Emoji%7CNoto%20Sans:ital,wght@0,300;1,300%7CNoto%20Serif
      @import url('https://fonts.googleapis.com/css2?family=Noto+Emoji&family=Noto+Sans:ital,wght@0,300;1,300&family=Noto+Serif&display=swap');

      @font-face {
        font-family: 'Simonetta-Black';
        src: url('/fonts/Simonetta-Black.ttf');
      }

      @font-face {
        font-family: 'Simonetta';
        src: url('/fonts/Simonetta-Regular.ttf');
      }

      @font-face {
        font-family: 'Noto Sans Light';
        src: url('/fonts/NotoSans-Light.ttf');
      }

      @font-face {
        font-family: 'Noto Serif';
        src: url('/fonts/NotoSerif-Regular.ttf');
      }

      * {
        --image-filter-dark: grayscale(40%);
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

      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: var(--text);
        background-color: var(--background);
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

      ::selection {
        background: var(--accent);
        color: white;
      }
    `}
  />
)
