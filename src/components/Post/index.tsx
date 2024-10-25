import Image from 'next/image'
import Link from 'next/link'

type PostProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageUrl: any
  title: string
  slug: string
  shortDescription: string
  category: string
  imageWidth?: number
  imageHeight?: number
  imagePriority?: boolean
}

export function Post({
  imageUrl,
  imageWidth,
  imageHeight,
  title,
  slug,
  shortDescription,
  category,
  imagePriority,
}: PostProps) {
  return (
    <div className="flex flex-col h-full justify-between items-start">
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          priority={imagePriority}
          className="rounded-xl"
        />

        <span className="text-emerald-500 text-xs font-bold">{category}</span>

        <Link
          href={slug}
          className="font-bold leading-normal hover:text-emerald-500 transition-colors"
        >
          <h3 className="mb-2">{title}</h3>
        </Link>

        <p className="text-xs leading-normal">{shortDescription}</p>
      </div>

      <Link
        href={slug}
        className="appearance-none inline-block rounded bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold mt-4 py-2 px-6 transition-colors"
      >
        Ler mais
      </Link>
    </div>
  )
}
