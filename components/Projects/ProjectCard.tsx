import { Card } from 'components/Card'
import { ProjectType } from './projectsDB'

type ProjectCardProps = {
  project: ProjectType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="max-w-[20rem] flex flex-col">
      <h3 className="text-4xl my-0 ">{project.title}</h3>
      <h4 className="text-xl mt-0">{project.subtitle}</h4>
      <img src={project.image} alt={project.title} className="mx-auto my-6" />
      <p className="flex-grow">{project.description}</p>
      <div className="flex flex-row flex-wrap">
        {project.links.map((link) => (
          <a
            target="_blank"
            rel="nofollow"
            href={link.url}
            key={link.url + link.text}
          >
            {link.text}
          </a>
        ))}
      </div>
    </Card>
  )
}
