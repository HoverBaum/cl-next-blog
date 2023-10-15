import { ColorModeSelection } from 'app/ClientContext/ColorMode/ColorModeContext'
import { useColorMode } from 'app/ClientContext/ColorMode/useColorMode'
import { ComputerIcon } from 'components/Icons/ComputerIcon'
import { MoonIcon } from 'components/Icons/MoonIcon'
import { SunIcon } from 'components/Icons/SunIcon'
import { useState, useRef } from 'react'
import { useOnOutsideClick } from 'utils/hooks/useOnOutsideClick'

export const ModeSwitch = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useOnOutsideClick(ref, () => setIsOpen(false))
  const { setSelectedMode, selectedMode } = useColorMode()

  const selectMode = (mode: ColorModeSelection) => {
    setSelectedMode(mode)
    setIsOpen(false)
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
          className="absolute top-[130%] left-full -translate-x-full md:left-1/2 md:-translate-x-1/2 py-0.5 bg-surface dark:bg-surface-dark border border-border shadow-md "
        >
          <ul className="cursor-pointer" style={{ margin: 0 }}>
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
