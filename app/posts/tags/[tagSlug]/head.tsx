import { allPosts } from 'contentlayer/generated'
import { tagsFromPosts } from 'utils/tagsFromPosts'
import { SharedHead } from '../../../SharedHead'

export default function Head({
  params: { tagSlug },
}: {
  params: { tagSlug: string }
}) {
  const tag = tagsFromPosts(allPosts).find((tag) => tag.tagSlug === tagSlug)
  console.log('TAG', tag)
  const title = `Hendriks Blog | ${tag?.name}`
  return (
    <>
      <SharedHead />
      <title>{title}</title>
    </>
  )
}
