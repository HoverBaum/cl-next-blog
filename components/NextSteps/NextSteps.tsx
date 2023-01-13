import { SmallTitle } from 'components/SmallTitle'

type NextStepsProps = {
  children: React.ReactNode[]
}

export const NextSteps = ({ children }: NextStepsProps) => {
  return (
    <section>
      <SmallTitle>Where to go next</SmallTitle>
      <div
        className={`grid ${
          children.length % 4 === 0 ? 'md:grid-cols-4' : 'md:grid-cols-3'
        } gap-4`}
      >
        {children}
      </div>
    </section>
  )
}
