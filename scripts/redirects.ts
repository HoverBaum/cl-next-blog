// Deno Script

const rawJsonPosts = await Deno.readTextFile(
  '../.contentlayer/generated/Post/_index.json'
)
const allPosts = JSON.parse(rawJsonPosts)

// Map allPosts onto nextjs redirects and save them to a json file.
const redirects = allPosts.map((post: any) => {
  const postDate = new Date(post.date)
  const year = postDate.getFullYear()
  const month = postDate.getMonth().toString().padStart(2, '0')
  const day = postDate.getDay().toString().padStart(2, '0')
  const filename = post._raw.sourceFileName.replace(/\..+?$/, '')
  return {
    source: `/${year}/${month}/${day}/${filename}/`,
    destination: post.slug,
    permanent: true,
  }
})

await Deno.writeTextFile('./redirects.json', JSON.stringify(redirects))
