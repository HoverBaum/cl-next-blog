import Head from 'next/head'
import { Wrapper } from 'components/Wrapper'
import Link from 'next/link'
import { projectsDB } from 'components/Projects/projectsDB'
import { ProjectCard } from 'components/Projects/ProjectCard'
import { NextSteps } from 'components/NextSteps/NextSteps'

const Talks = () => {
  return (
    <div>
      <Head>
        <title>Hendriks Projects</title>
      </Head>

      <Wrapper>
        <h1 className="mb-8">All Projects</h1>

        <div className="grid md:grid-cols-2 gap-8 justify-items-center mb-8">
          {projectsDB.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>

        <NextSteps />
      </Wrapper>
    </div>
  )
}

export default Talks
