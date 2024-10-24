import Image from 'next/image'
import Link from 'next/link'

type PostProps = {
  imageUrl: any
  title: string
  slug: string
  category: string
}

export function Post({ imageUrl, title, slug, category }: PostProps) {
  return (
    <div>
      <Image src={imageUrl} alt={title} width={1280} height={853} className="rounded-xl" />

      <span className="text-emerald-500 text-xs font-bold">{category}</span>

      <Link
        href={slug}
        className="font-bold text-lg leading-normal hover:text-emerald-500 transition-colors"
      >
        <h3 className="mb-2 lg:mb-0">{title}</h3>
      </Link>

      <p className="text-xs leading-normal">
        Vero voluptatibus tempora odio quisquam alias rem non optio provident maiores quas sunt
        reprehenderit, nemo voluptas facere. Necessitatibus autem nulla minus deleniti...
      </p>

      <Link
        href={slug}
        className="appearance-none inline-block rounded bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold mt-4 py-2 px-6 transition-colors"
      >
        Ler mais
      </Link>
    </div>
  )
}
