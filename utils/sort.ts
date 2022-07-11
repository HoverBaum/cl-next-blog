import { Post } from 'contentlayer/generated'

export const postsByDateDesc = (a: Post, b: Post): number => {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}
