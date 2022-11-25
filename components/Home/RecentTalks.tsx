type Talk = {
  title: string
  description: string
  videoHref?: string
  gitHubHref?: string
  htmlSlidesHref?: string
}

export const RecentTalks = () => {
  const { title, description, videoHref, gitHubHref, htmlSlidesHref } = {
    title: '',
  } as Talk

  return (
    <div>
      <div>
        <h2></h2>
      </div>
    </div>
  )
}
