import { RefObject, useEffect, useState } from 'react'

/**
 * Returns an {isFixed} that to know when the provided element should be fixed tot he top.
 * Uses a default threshold of 300px, pass in a value to override.
 * If the page loads scrolled it waits until scrolled to top before correcting threshold.
 */
export const useScrollFix = (
  element: RefObject<HTMLElement>,
  defaultThreshold = 300
) => {
  const [scrollThreshold, setScrollThreshold] = useState(defaultThreshold)
  const [isFixed, setIsFixed] = useState(false)

  // Handle the Threshold.
  useEffect(() => {
    const setThreshold = () => {
      // Read the Y position on page of sideNav and store it in threshold.
      const sideNav = document.getElementById('sideNav')
      const sideNavTop =
        sideNav?.getBoundingClientRect().top ?? defaultThreshold
      if (sideNavTop > 0) {
        setScrollThreshold(sideNavTop)
      }
    }

    if (window.scrollY === 0) {
      setThreshold()
      return
    }

    // If we are not at top of page, add a listener that waits until we are.
    const handler = () => {
      // We could use scrollThreshold here as a boundary but that would incure dependencies
      // and thus more runs of this useEffect.
      if (window.scrollY === 0) {
        setThreshold()
        document.removeEventListener('scroll', handler)
      }
    }
    document.addEventListener('scroll', handler)
    return () => {
      document.removeEventListener('scroll', handler)
    }
  }, [])

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > scrollThreshold) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    document.addEventListener('scroll', handler)

    // initially call handler in case we load scrolled.
    handler()

    return () => {
      document.removeEventListener('scroll', handler)
    }
  }, [scrollThreshold])

  return { isFixed }
}
