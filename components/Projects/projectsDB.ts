type LinkType = {
  url: string
  text: string
}

export type ProjectType = {
  title: string
  subtitle?: string
  description: string
  image: string
  links: LinkType[]
}

export const projectsDB: ProjectType[] = [
  {
    title: 'The Sword',
    subtitle: 'Interactive Fiction Game',
    description:
      'Web based game where you as the protagonist go on a journey to find the mythical sword. Can you become the next king?',
    image: '/images/projects/placeholder.png',
    links: [
      {
        url: 'https://hoverbaum.itch.io/the-sword',
        text: 'Play on itch',
      },
    ],
  },
  {
    title: 'MeiliDu',
    subtitle: 'Hexo Theme',
    description:
      'Simple, text focussed blogging theme for static site generator Hexo.',
    image: '/images/projects/placeholder.png',
    links: [
      {
        url: 'https://meilidu.github.io/',
        text: 'MeiliDu Demo',
      },
    ],
  },
  {
    title: 'Browser Based Games',
    subtitle: 'HTML5 Games',
    description:
      'A collection of JavaScript based games to play right in your browser.',
    image: '/images/projects/placeholder.png',
    links: [
      {
        url: 'http://browserbasedgames.net/',
        text: 'BrowserBasedGames.net',
      },
    ],
  },
  {
    title: 'BlankUp',
    subtitle: 'Markdown Editor',
    description: 'Clean, cross plattform Markdown Editor based on Electron.',
    image: '/images/projects/placeholder.png',
    links: [
      { url: 'https://hoverbaum.github.io/BlankUp-Electron/', text: 'BlankUp' },
    ],
  },
  {
    title: 'LoL Wishes',
    subtitle: 'Community Tool',
    description:
      'Wishlist League of Legends skins and get notified when it goes on sale.',
    image: '/images/projects/placeholder.png',
    links: [],
  },
]