import { ComputerIcon } from 'components/Icons/ComputerIcon'
import { MoonIcon } from 'components/Icons/MoonIcon'
import { SunIcon } from 'components/Icons/SunIcon'
import { useState, useRef, useEffect } from 'react'
import { enableCurrentMode } from 'utils/colorMode'
import { useOnOutsideClick } from 'utils/hooks/useOnOutsideClick'

type ModeType = 'light' | 'dark' | 'system'

export const ModeSwitch = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMode, setSelectedMode] = useState<ModeType>('system')
  const ref = useRef<HTMLDivElement>(null)
  useOnOutsideClick(ref, () => setIsOpen(false))

  // initially determine current mode.
  useEffect(() => {
    let mode: ModeType = 'system'
    if (localStorage.theme === 'dark') mode = 'dark'
    if (localStorage.theme === 'light') mode = 'light'
    setSelectedMode(mode)
  }, [])

  const selectMode = (mode: ModeType) => {
    setSelectedMode(mode)
    setIsOpen(false)

    // Setting theme according to Tailwind docs: https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
    if (mode === 'light') {
      localStorage.theme = 'light'
    } else if (mode === 'dark') {
      localStorage.theme = 'dark'
    } else {
      localStorage.removeItem('theme')
    }

    enableCurrentMode()
  }

  return (
    <div className="relative">
      <div onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}>
        {selectedMode === 'light' && (
          <SunIcon className="h-5 w-5 hover:text-primary dark:hover:text-primary-dark cursor-pointer" />
        )}
        {selectedMode === 'dark' && (
          <MoonIcon className="h-5 w-5 hover:text-primary dark:hover:text-primary-dark cursor-pointer" />
        )}
        {selectedMode === 'system' && (
          <ComputerIcon className="h-5 w-5 hover:text-primary dark:hover:text-primary-dark cursor-pointer" />
        )}
      </div>
      {isOpen && (
        <div
          ref={ref}
          className="absolute top-[130%] left-1/2 -translate-x-1/2 py-0.5 bg-surface dark:bg-surface-dark border border-border shadow-md "
        >
          <ul className="cursor-pointer">
            <li
              onClick={() => selectMode('light')}
              className={`hover:bg-background dark:hover:bg-background-dark px-2 py-0.5 flex items-center font-semibold text-sm ${
                selectedMode === 'light'
                  ? 'text-primary dark:text-primary-dark'
                  : ''
              }`}
            >
              <SunIcon className="w-4 h-4 mr-0.5" /> Light
            </li>
            <li
              onClick={() => selectMode('dark')}
              className={`hover:bg-background dark:hover:bg-background-dark px-2 py-0.5 flex items-center font-semibold text-sm ${
                selectedMode === 'dark'
                  ? 'text-primary dark:text-primary-dark'
                  : ''
              }`}
            >
              <MoonIcon className="w-4 h-4 mr-0.5" /> Dark
            </li>
            <li
              onClick={() => selectMode('system')}
              className={`hover:bg-background dark:hover:bg-background-dark px-2 py-0.5 flex items-center font-semibold text-sm ${
                selectedMode === 'system'
                  ? 'text-primary dark:text-primary-dark'
                  : ''
              }`}
            >
              <ComputerIcon className="w-4 h-4 mr-0.5" /> System
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
