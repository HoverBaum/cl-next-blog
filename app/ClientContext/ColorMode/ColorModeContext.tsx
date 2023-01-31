import React, { createContext, useEffect, useMemo, useState } from 'react'
import { enableCurrentMode } from 'app/ClientContext/ColorMode/colorMode'

export type ColorMode = 'dark' | 'light'
export type ColorModeSelection = 'system' | 'dark' | 'light'

type ColorModeContextValue = {
  mode: ColorMode
  selectedMode: ColorModeSelection
  setSelectedMode: (mode: ColorModeSelection) => void
}

const defaultValue: ColorModeContextValue = {
  mode: 'light',
  selectedMode: 'system',
  setSelectedMode: () => {},
}

export const ColorModeContext = createContext(defaultValue)

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

export const ColorModeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [mode, setMode] = useState<ColorMode>(defaultValue.mode)
  const [selectedMode, setSelectedMode] = useState<ColorModeSelection>(
    defaultValue.selectedMode
  )
  const [modeWasRead, setModeWasRead] = useState(false)
  const value = useMemo(
    () => ({ mode, selectedMode, setSelectedMode }),
    [mode, selectedMode, setSelectedMode]
  )

  useEffect(() => {
    const isStoredDarkMode = localStorage.theme === 'dark'
    const isStoredLightMode = localStorage.theme === 'light'

    if (isStoredDarkMode) setSelectedMode('dark')
    if (isStoredLightMode) setSelectedMode('light')

    setModeWasRead(true)
  }, [])

  // Update UI every time "selectedMode" was updated.
  useEffect(() => {
    // Only act after we initially read from localStorage, as we will overwrite it here.
    if (!modeWasRead) return
    if (selectedMode === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', selectedMode)
    }

    // Set mode to either 'light' or 'dark' to use within the website.
    const mode = enableCurrentMode()
    setMode(mode)

    // If we are in system mode, we need to listen for changes on the media query.
    if (selectedMode === 'system') {
      mediaQuery.addEventListener('change', enableCurrentMode)
    } else {
      mediaQuery.removeEventListener('change', enableCurrentMode)
    }
  }, [selectedMode, modeWasRead, setMode])

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  )
}
