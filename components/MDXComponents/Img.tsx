/* eslint-disable @next/next/no-img-element */
import { ComponentType } from 'react'

type ImgProps = {
  src?: string
  alt?: string
  limitHeight?: boolean
}

export const Img: ComponentType<ImgProps> = ({
  src,
  alt,
  limitHeight = false,
}) => {
  return (
    <figure className="flex flex-col items-center my-6">
      <img
        src={src}
        alt={alt}
        className={`max-w-full block rounded-md mb-1 ease-out duration-300 dark:grayscale-[10%] hover:grayscale-0 ${
          limitHeight ? 'max-h-[80vh]' : ''
        }`}
      />
      <figcaption className="text-sm">{alt}</figcaption>
    </figure>
  )
}
