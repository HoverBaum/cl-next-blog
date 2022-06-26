/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ComponentType } from 'react'

type ImgProps = {
  src: string
  alt: string
}

export const Img: ComponentType<ImgProps> = ({ src, alt }) => {
  return (
    <figure
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <img
        src={src}
        alt={alt}
        css={css`
          max-width: 100%;
          display: block;
          border-radius: 0.2rem;
          margin-bottom: 0.5rem;
        `}
      />
      <figcaption>{alt}</figcaption>
    </figure>
  )
}
