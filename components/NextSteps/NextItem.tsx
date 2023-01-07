type NextItemsProps = {
  title: string
  href: string
  hrefText: string
}

export const NextItem = ({ href, hrefText, title }: NextItemsProps) => {
  return (
    <div className="p-4 border-2 border-border dark:border-border-dark ">
      <div className="md:flex justify-between">
        <div className="w-full">
          <h3 className="text-4xl mt-0 ">{title}</h3>
          <a href={href}>{hrefText}</a>
        </div>
      </div>
    </div>
  )
}
