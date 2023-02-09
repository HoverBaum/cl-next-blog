import { Emoji } from 'components/Emoji'
import { LinkButton } from 'components/LinkButton'
import { Wrapper } from 'components/Wrapper'

export default function NotFound() {
  return (
    <Wrapper>
      <h1>
        Not found <Emoji>🔍</Emoji>
      </h1>

      <LinkButton href="/" className="mt-8">
        Go Home
      </LinkButton>
    </Wrapper>
  )
}
