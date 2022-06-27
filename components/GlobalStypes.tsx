import { css, Global } from '@emotion/react'
import { theme } from './theme'

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

      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 300;
        color: ${theme.textColor};
        font-size: 18px;
      }

      h1 {
        ${scaledFontSize(5)};
        font-family: 'Simonetta-Black', serif;
        margin-bottom: 0;
      }
      h2 {
        ${scaledFontSize(4)};
        font-family: 'Noto Serif', cursive;
        margin-bottom: 0;
      }
      h3 {
        ${scaledFontSize(3)};
        font-family: 'Noto Serif', serif;
        margin-bottom: 0;
      }
      h4 {
        ${scaledFontSize(2)};
        font-family: 'Simonetta-Black', serif;
        margin-bottom: 0;
      }
      h5 {
        ${scaledFontSize(1)};
        font-family: 'Simonetta-Black', serif;
        margin-bottom: 0;
      }

      a:hover {
        text-decoration: underline;
        color: #cc4a1a;
      }

      ::selection {
        background: #ff6933;
        color: white;
      }
    `}
  />
)
