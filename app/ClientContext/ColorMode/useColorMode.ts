import { useContext } from 'react'
import { ColorModeContext } from './ColorModeContext'

export const useColorMode = () => {
  const { setSelectedMode, mode, selectedMode } = useContext(ColorModeContext)

  return { setSelectedMode, mode, selectedMode }
}
