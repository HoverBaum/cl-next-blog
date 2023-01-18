import { PropsWithChildren } from 'react'

export const Wrapper: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div className="max-w-[50rem] px-2 sm:px-4 mx-auto">{children}</div>
}
