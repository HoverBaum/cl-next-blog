import { useEffect, useRef, useState } from 'react'

export const WigglingEmoji = ({ children }: { children: string }) => {
  const [isWiggling, setIsWiggling] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const handler = () => {
      setIsWiggling(true)
      setTimeout(() => setIsWiggling(false), 1500)
    }
    element.addEventListener('mouseenter', handler)
    return () => {
      element.removeEventListener('mouseenter', handler)
    }
  }, [ref])

  return (
    <span
      ref={ref}
      className={`${
        isWiggling && 'animate-wiggle'
      } inline-block font-emoji text-primary dark:text-primary-dark`}
    >
      {children}
    </span>
  )
}
