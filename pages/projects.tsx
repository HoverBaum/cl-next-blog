import Head from 'next/head'
import { Wrapper } from 'components/Wrapper'
import { projectsDB } from 'components/Projects/projectsDB'
import { ProjectCard } from 'components/Projects/ProjectCard'
import { NextSteps } from 'components/NextSteps/NextSteps'
import { NextHome } from 'components/NextSteps/NextHome'
import { NextAboutMe } from 'components/NextSteps/NextAboutMe'
import { NextPosts } from 'components/NextSteps/NextPosts'

const Talks = () => {
  return (
    <div>
      <Head>
        <title>Hendriks Projects</title>
      </Head>

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

export default Talks
