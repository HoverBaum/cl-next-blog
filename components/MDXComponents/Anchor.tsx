import Link from 'next/link'

type AnchorProps = {
  children: React.ReactNode
  id: string
}

export const Anchor = ({ id, children }: AnchorProps) => {
  return (
    <div className="absolute -translate-x-full ">
      <div className="absolute -top-10" id={id}></div>

      <a className="text-text/30 text-[0.5em]" href={`#${id}`}>
        {children}
      </a>
    </div>
  )
}
