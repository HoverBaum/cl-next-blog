import { BlogPost } from './blogPostTypes'

export const postsByDateDesc = (a: BlogPost, b: BlogPost): number => {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}
