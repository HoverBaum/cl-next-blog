import { PostCard } from 'components/Posts/PostCard'
import { Wrapper } from 'components/Wrapper'
import { allPosts } from 'contentlayer/generated'
import { postsByDateDesc } from 'utils/sort'

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

        <p>
          Today I am a passionate user of GenAI and love to endulge in Prompt
          Engineering. On this page you find my Posts and Resources about the
          topic.
        </p>

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
