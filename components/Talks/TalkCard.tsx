import { Card } from 'components/Card'
import { TalkType } from './allTalks'

export const TalkCard = ({ talk }: { talk: TalkType }) => {
  const { title, subtitle, description, year, links } = talk

  return (
    <Card className="mb-8 relative">
      <hgroup>
        <h3 className="text-4xl mt-0 ">{title}</h3>
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