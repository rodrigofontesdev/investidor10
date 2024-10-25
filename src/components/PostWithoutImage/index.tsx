import Link from 'next/link'

type PostWithoutImageProps = {
  title: string
  slug: string
  shortDescription: string
  category: string
}

export function PostWithoutImage({
  title,
  slug,
  shortDescription,
  category,
}: PostWithoutImageProps) {
  return (
    <>
      <span className="text-emerald-500 text-xs font-bold">{category}</span>

      <Link
        href={slug}
        className="font-bold text-lg leading-normal hover:text-emerald-500 transition-colors"
      >
        <h2 className="mb-2 lg:mb-0">{title}</h2>
      </Link>

      <p className="text-xs leading-normal">{shortDescription}</p>

      <Link
        href={slug}
        className="appearance-none inline-block rounded bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold mt-4 py-2 px-6 transition-colors"
      >
        Ler mais
      </Link>
    </>
  )
}
