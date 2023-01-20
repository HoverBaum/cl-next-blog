import { Card } from 'components/Card'
import Image from 'next/image'
import { ProjectType } from './projectsDB'

type ProjectCardProps = {
  project: ProjectType
  showImage?: boolean
}

export const ProjectCard = ({
  project,
  showImage = true,
}: ProjectCardProps) => {
  return (
    <Card className="max-w-[20rem] flex flex-col">
      <h3 className="text-4xl my-0 ">{project.title}</h3>
      <h4 className="text-lg mt-0">{project.subtitle}</h4>
      {showImage && (
        <div className="mt-4">
          <Image
            src={project.image}
            alt={project.title}
            width="500"
            height="375"
          />
        </div>
      )}
      <p className="flex-grow">{project.description}</p>
      <div className="grid place-items-center md:place-items-start">
        {project.links.map((link) => (
          <a href={link.url} key={link.url + link.text}>
            {link.text}
          </a>
        ))}
      </div>
    </Card>
  )
}
