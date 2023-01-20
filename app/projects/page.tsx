import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextPosts } from 'components/NextSteps/NextPosts'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { ProjectCard } from 'components/Projects/ProjectCard'
import { projectsDB } from 'components/Projects/projectsDB'
import { Wrapper } from 'components/Wrapper'

export default function Projects() {
  return (
    <div>
      <Wrapper>
        <h1 className="mb-8">All Projects</h1>
      </Wrapper>

      <div className="px-2 grid md:grid-cols-3 gap-6 justify-items-center mb-8 max-w-[60rem] mx-auto">
        {projectsDB.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
      <Wrapper>
        <NextSteps>
          <NextHome />
          <NextAboutMe />
          <NextPosts />
        </NextSteps>
      </Wrapper>
    </div>
  )
}
