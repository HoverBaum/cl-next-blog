import { css, Global } from '@emotion/react'
import { theme } from './theme'

const baseFontSize = '1em'
const fontRatio = 1.33

const scaledFontSize = (scale: number) => {
  return css`
    font-size: calc(${baseFontSize} * ${Math.pow(fontRatio, scale)});
  `
}

export const GlobalStyles = () => (
  <Global
    styles={css`
      //https://fonts.google.com/share?selection.family=Noto%20Emoji%7CNoto%20Sans:ital,wght@0,300;1,300%7CNoto%20Serif
      @import url('https://fonts.googleapis.com/css2?family=Noto+Emoji&family=Noto+Sans:ital,wght@0,300;1,300&family=Noto+Serif&display=swap');

      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-size: ${baseFontSize};
        font-family: 'Noto Sans', sans-serif;
        font-weight: 300;
        color: ${theme.textColor};
      }

      h1 {
        ${scaledFontSize(5)};
        font-weight: 300;
      }
      h2 {
        ${scaledFontSize(4)};
        font-weight: 300;
        font-family: 'Noto Serif', serif;
      }
      h3 {
        ${scaledFontSize(3)};
        font-family: 'Noto Serif', serif;
      }
      h4 {
        ${scaledFontSize(2)};
        font-family: 'Noto Serif', serif;
      }
      h5 {
        ${scaledFontSize(1)};
        font-family: 'Noto Serif', serif;
      }
    `}
  />
)
