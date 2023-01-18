import { LinkButton } from 'components/LinkButton'
import { SmallTitle } from 'components/SmallTitle'
import { ProjectCard } from './ProjectCard'
import { projectsDB } from './projectsDB'

export const FeaturedProjects = () => {
  return (
    <section>
      <SmallTitle>Projects</SmallTitle>
      <div className="grid md:grid-cols-2 justify-items-start gap-4">
        {projectsDB.slice(0, 2).map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
      <div className="grid place-items-center md:place-items-start">
        <LinkButton className="mt-8" href="/projects">
          All Projects
        </LinkButton>
      </div>
    </section>
  )
}
