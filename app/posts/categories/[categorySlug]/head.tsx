import { allPosts } from 'contentlayer/generated'
import { categoriesFromPosts } from 'utils/categoriesFromPosts'
import { SharedHead } from '../../../SharedHead'

export default function Head({
  params: { categorySlug },
}: {
  params: { categorySlug: string }
}) {
  const category = categoriesFromPosts(allPosts).find(
    (category) => category.categorySlug === categorySlug
  )
  const title = `Hendriks Blog | ${category?.name}`
  return (
    <>
      <SharedHead />
      <title>{title}</title>
    </>
  )
}
