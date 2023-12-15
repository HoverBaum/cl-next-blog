import { PostCard } from 'components/Posts/PostCard'
import { Wrapper } from 'components/Wrapper'
import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import { postsByDateDesc } from 'utils/sort'
import RobotPainting from '../../public/images/genai/robot-painting.png'
import Link from 'next/link'

const GenAITags = [
  'genai',
  'chatgpt',
  'gpt',
  'ai',
  'generativeaoi',
  'stablediffusion',
  'midjourney',
  'dall-e',
  'copilot',
]

export default function GenAI() {
  const posts = allPosts
    .filter((post) =>
      post.tags?.some((tag) => GenAITags.includes(tag.toLowerCase()))
    )
    .sort(postsByDateDesc)

  return (
    <div>
      <Wrapper>
        <h1>GenAI</h1>

        <p>
          Generative AI (GenAI) can create or generate content from input. Input
          can range from text and images to audio and video. Generated output
          ranges from text over images and audio to video and an increasing list
          of content types. Dall-E and Stable diffusion started the age of
          Text-To-Image and ChatGPT made the value and benefit of Text-To-Text
          GenAI accessible to the masses.
        </p>

        <figure className="flex flex-col items-center my-6">
          <Image src={RobotPainting} alt="A Robot painting" />
          <figcaption className="text-sm">
            A Robot painting for my blog (Dalle-E 3)
          </figcaption>
        </figure>

        <p>
          Today I am a passionate user of GenAI and love to endulge in Prompt
          Engineering. On this page you find my Posts and Resources about the
          topic. Start by reading:
        </p>

        <ul>
          <li>
            <Link href="/posts/2023.01-Generative-AI-Will-Stay">
              Generative AI is here to stay!
            </Link>
          </li>
        </ul>

        <h2>Related Posts</h2>
        <div>
          {posts.map((post) => (
            <div className="my-8" key={post._id}>
              <PostCard key={post._id} post={post} />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}
