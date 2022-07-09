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

      // Colors
      // https://web.dev/building-a-color-scheme/
      //16°, 77%, 45%
      * {
        --brand-hue: 16;
        --brand-saturation: 77%;
        --brand-lightness: 45%;

        /* light */
        --brand-light: hsl(
          var(--brand-hue) var(--brand-saturation) var(--brand-lightness)
        );
        --text1-light: hsl(var(--brand-hue) var(--brand-saturation) 5%);
        --text2-light: hsl(var(--brand-hue) 30% 30%);
        --surface1-light: hsl(var(--brand-hue) 25% 90%);
        --surface2-light: hsl(var(--brand-hue) 20% 99%);
        --surface3-light: hsl(var(--brand-hue) 20% 92%);
        --surface4-light: hsl(var(--brand-hue) 20% 85%);
        --surface-shadow-light: var(--brand-hue) 10% 20%;
        --shadow-strength-light: 0.02;

        /* dark */
        --brand-dark: hsl(
          var(--brand-hue) calc(var(--brand-saturation) / 1.5)
            calc(var(--brand-lightness) / 1.25)
        );
        --text1-dark: hsl(var(--brand-hue) 15% 85%);
        --text2-dark: hsl(var(--brand-hue) 5% 65%);
        --surface1-dark: hsl(var(--brand-hue) 10% 10%);
        --surface2-dark: hsl(var(--brand-hue) 10% 15%);
        --surface3-dark: hsl(var(--brand-hue) 5% 20%);
        --surface4-dark: hsl(var(--brand-hue) 5% 25%);
        --surface-shadow-dark: var(--brand-hue) 50% 3%;
        --shadow-strength-dark: 0.8;
      }

      :root {
        color-scheme: light;

        /* set defaults */
        --brand: var(--brand-light);
        --text1: var(--text1-light);
        --text2: var(--text2-light);
        --surface1: var(--surface1-light);
        --surface2: var(--surface2-light);
        --surface3: var(--surface3-light);
        --surface4: var(--surface4-light);
        --surface-shadow: var(--surface-shadow-light);
        --shadow-strength: var(--shadow-strength-light);
      }

      @media (prefers-color-scheme: dark) {
        :root {
          color-scheme: dark;

          --brand: var(--brand-dark);
          --text1: var(--text1-dark);
          --text2: var(--text2-dark);
          --surface1: var(--surface1-dark);
          --surface2: var(--surface2-dark);
          --surface3: var(--surface3-dark);
          --surface4: var(--surface4-dark);
          --surface-shadow: var(--surface-shadow-dark);
          --shadow-strength: var(--shadow-strength-dark);
        }
      }

      .shadow {
        border: 1px solid hsl(var(--brand-hue) 10% 50% / 15%);
        box-shadow: 0 1rem 0.5rem -0.5rem;
        box-shadow: 0 2.8px 2.2px
            hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.03)),
          0 6.7px 5.3px
            hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.01)),
          0 12.5px 10px
            hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.02)),
          0 22.3px 17.9px
            hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.02)),
          0 41.8px 33.4px
            hsl(var(--surface-shadow) / calc(var(--shadow-strength) + 0.03)),
          0 100px 80px hsl(var(--surface-shadow) / var(--shadow-strength));
      }

      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 300;
        font-size: 18px;
        color: var(--text1);
        background-color: var(--surface2);
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
        color: var(--brand);
        text-decoration: underline;
        transition: 0.3s ease-out;
      }

      ::selection {
        background: #ff6933;
        color: white;
      }
    `}
  />
)
