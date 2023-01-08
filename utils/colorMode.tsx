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
export const enableCurrentMode = (): void => {
  if (isDarkMode()) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// TODO: implement a hook that listens for changes on local storage and prefers color scheme to always provide the current color mode.
