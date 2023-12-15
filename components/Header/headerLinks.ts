export type NavLink = {
  href: string
  title: string
  hideOnMobile?: boolean
  icon?: string
}

export const headerLinks: NavLink[] = [
  {
    href: '/',
    title: 'Home',
    icon: '🏠',
  },
  { href: '/posts', title: 'Posts', icon: '📖' },
  { href: '/genai', title: 'GenAI', icon: '🤖' },
  { href: '/me', title: 'About Me', icon: '🧑‍💻', hideOnMobile: true },
  { href: '/talks', title: 'Talks', icon: '🎙️', hideOnMobile: true },
]
