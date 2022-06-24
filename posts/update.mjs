#!/usr/bin/env zx

const { stdout: postsOutput } = await $`ls | grep .md`
const posts = postsOutput.split('\n').filter((line) => line !== '')

await Promise.all(
  posts.map(async (postFile) => {
    const contents = await fs.readFile(postFile)
    await fs.writeFile(postFile, `---\n${contents.toString()}`)
  })
)

console.log('Done')
