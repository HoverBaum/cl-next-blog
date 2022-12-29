import { PropsWithChildren } from 'react'

export const Wrapper: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div className="max-w-[60rem] px-4 mx-auto">{children}</div>
}
