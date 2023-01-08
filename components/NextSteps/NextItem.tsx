import { useRouter } from 'next/router'

type NextItemsProps = {
  title: string
  href: string
  icon: string
}

export const NextItem = ({ href, icon, title }: NextItemsProps) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(href)}
      className="p-4 border-2 border-border dark:border-border-dark cursor-pointer hover:bg-surface dark:hover:bg-surface-dark hover:shadow-md"
    >
      <div className="md:flex justify-between">
        <div className="w-full">
          <span className="text-6xl block text-center">{icon}</span>
          <span className="mt-4 text-2xl block text-center">{title}</span>
        </div>
      </div>
    </div>
  )
}
