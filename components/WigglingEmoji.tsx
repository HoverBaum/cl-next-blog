export const WigglingEmoji = ({ children }: { children: string }) => {
  return <span className="hover:animate-wiggle inline-block">{children}</span>
}
