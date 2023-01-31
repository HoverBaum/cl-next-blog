import { ColorMode } from 'app/ClientContext/ColorMode/ColorModeContext'

export const isDarkMode = (): boolean => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return true
  } else {
    return false
  }
}

/**
 * Theme switch support. Modelled after Tailwind Docs.
 * https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
 */
export const enableCurrentMode = (): ColorMode => {
  if (isDarkMode()) {
    document.documentElement.classList.add('dark')
    return 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    return 'light'
  }
}
