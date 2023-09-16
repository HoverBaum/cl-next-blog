export type LinkType = {
  href: string
  text: string
  type: 'GitHub' | 'YouTube' | 'PDF' | 'URL'
}

export type TalkType = {
  title: string
  subtitle: string
  description: string
  links: LinkType[]
  year: number
}

export const talks: TalkType[] = [
  {
    title: '🏰 Medieval Strategies for Cyber Security',
    subtitle: '',
    description: 'Let medieval castles inspire your modern day Cyber Security.',
    links: [
      {
        href: 'https://medieval-security.wallbaum.dev/',
        text: 'HTML based presentation',
        type: 'URL',
      },
      {
        href: '/talk-pdfs/medieval-security.pdf',
        text: 'Code.Talks 2023 version as PDF',
        type: 'PDF',
      },
      {
        href: 'https://github.com/HoverBaum/talk-medieval-cyber-security',
        text: 'GitHub Repo',
        type: 'GitHub',
      },
    ],
    year: 2023,
  },
  {
    title: '🌱 Developing Growth',
    subtitle: '',
    description: 'A practical guide to "Growth Hacking" by example.',
    links: [
      {
        href: 'https://developing-growth.wallbaum.dev/',
        text: 'HTML based presentation',
        type: 'URL',
      },
      {
        href: 'https://youtu.be/AeZejnAprgo?si=e7VYm0O035zR76Ls',
        text: 'Recording from Code.Talks 2022',
        type: 'URL',
      },
      {
        href: 'https://github.com/HoverBaum/talk-developing-growth',
        text: 'GitHub Repo',
        type: 'GitHub',
      },
    ],
    year: 2022,
  },
  {
    title: '🤑 How I earned 2 cents',
    subtitle: 'and why that changes the internet',
    description:
      'A talk about Web monetization, Activity Pub and how "Protocol over Platform" is shaping the webs future.',
    links: [
      {
        href: 'https://2cents-change-web.wallbaum.dev/',
        text: 'HTML based presentation',
        type: 'URL',
      },
      {
        href: 'https://github.com/HoverBaum/talk-2cents-changing-the-web',
        text: 'GitHub Repo',
        type: 'GitHub',
      },
    ],
    year: 2020,
  },
  {
    title: '🔮 A short history of webdevs future',
    subtitle: 'An introduction to webdev',
    description:
      'In this talk we will explore the history of web development to understand it’s current state and future. This journey through time is a reflection for web developers as well, as an entry point for everyone unrelated to the craft.',
    links: [
      // {
      //   href: 'https://webdev-intro.talks.hoverbaum.net/',
      //   text: 'HTML based presentation',
      //   type: 'URL',
      // },
      {
        href: 'https://github.com/HoverBaum/talk-webdev-history-and-future',
        text: 'GitHub Repo',
        type: 'GitHub',
      },
    ],
    year: 2020,
  },
  {
    title: '🧐 Testing webapps',
    subtitle: 'The whys and hows of testing and Cypress',
    description:
      'A talk about why you should do end to end (e2e) testing for your webapps and how to use Cypress for e2e-testing. We will gather motivation to get started with testing before diving into Cypress as an amazing tool to get the job done.',
    links: [
      // {
      //   href: 'http://testing-webapps.talks.hoverbaum.net/',
      //   text: 'HTML based presentation',
      //   type: 'URL',
      // },
      {
        href: 'https://www.youtube.com/watch?v=ZlHxwSJoCZM',
        text: 'Recording: code.talks 2019',
        type: 'YouTube',
      },
      {
        href: 'https://www.youtube.com/watch?v=u2_rljUQArs',
        text: 'Recording: Softwerkskammer 2019',
        type: 'YouTube',
      },
      {
        href: '/talk-pdfs/testing-webapps-nl-and-connects.pdf',
        text: 'As PDF (NL and Hamburg connects)',
        type: 'PDF',
      },
      {
        href: '/talk-pdfs/testing-webapps-charlie.pdf',
        text: 'As PDF (charlie)',
        type: 'PDF',
      },
      {
        href: 'https://github.com/HoverBaum/talk-testing-during-development',
        text: 'GitHub Repo',
        type: 'GitHub',
      },
    ],
    year: 2019,
  },
  {
    title: '😍 How I fell in love with an APi first CMS',
    subtitle: 'The rise of fun CMS development',
    description:
      'We take a look at the historic development of CMS solutions and arive at API first CMS systems.',
    links: [
      {
        href: 'https://docs.google.com/presentation/d/1NqdL0ILZqqbQSqw4yM0462jHxl3ER3JjdmfhicuQLBs/edit?usp=drivesdk',
        text: 'Online slideshow',
        type: 'URL',
      },
      {
        href: '/talk-pdfs/api-first-cms.pdf',
        text: 'As PDF',
        type: 'PDF',
      },
    ],
    year: 2018,
  },
  {
    title: '🔩 Node based CLIs',
    subtitle: 'Being awesome in JavaScript',
    description:
      'This talk takes a look at a range of great, NodeJS based command line interfaces. After exploring all that awesomeness, we also take a look at a way to build out own.',
    links: [
      {
        href: 'https://docs.google.com/presentation/d/1EpF_EJXtb6vIjXG5Vone7kc6cZhrZLDhmUnTYkYP_4M/edit?usp=drivesdk',
        text: 'Online slideshow',
        type: 'URL',
      },
      {
        href: '/talk-pdfs/node-based-cli.pdf',
        text: 'As PDF',
        type: 'PDF',
      },
    ],
    year: 2017,
  },
  {
    title: '🚂 ChooJS',
    subtitle: 'Introducing choo',
    description:
      'An introduction to ChooJS. A framework combining the best practices learned in React to create a fun developer experience.',
    links: [
      {
        href: 'https://docs.google.com/presentation/d/1fTcz2TzSUa5nnXy-AfAaWS-_GwSxZ3QY9OG5KRmJQAI/edit?usp=sharing',
        text: 'Online slideshow',
        type: 'URL',
      },
      {
        href: '/talk-pdfs/choo-frontend.pdf',
        text: 'As PDF',
        type: 'PDF',
      },
    ],
    year: 2017,
  },
]
