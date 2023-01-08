import { useEffect, useState } from 'react'

export const WigglingEmoji = ({ children }: { children: string }) => {
  const [isWiggling, setIsWiggling] = useState(false)
  const [id] = useState(Math.random() * 1000 + Date.now() + '')

  useEffect(() => {
    const element = document.getElementById(id)
    if (!element) return
    const handler = () => {
      setIsWiggling(true)
      setTimeout(() => setIsWiggling(false), 1500)
    }
    element.addEventListener('mouseenter', handler)
    return () => {
      element.removeEventListener('mouseenter', handler)
    }
  }, [])

  return (
    <span
      id={id}
      className={`${isWiggling && 'animate-wiggle'} inline-block font-emoji`}
    >
      {children}
    </span>
  )
}
