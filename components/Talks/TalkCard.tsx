import { Card } from 'components/Card'
import { TalkType } from './allTalks'

export const TalkCard = ({ talk }: { talk: TalkType }) => {
  const { title, subtitle, description, year, links } = talk

  return (
    <Card className="mb-6 relative">
      <hgroup>
        <h3 className="text-4xl mt-0 ">
          <span className="font-emoji">{title.substring(0, 2)}</span>
          {title.substring(2)}
        </h3>
        <h4 className="text-xl mt-0">{subtitle}</h4>

        <p>{description}</p>

        <ul className="list-disc pl-8">
          {links.map(({ type, href, text }) => (
            <li key={href}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>

        <span className="absolute bottom-2 right-2 opacity-60">{year}</span>
      </hgroup>
    </Card>
  )
}
