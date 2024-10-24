import Image from 'next/image'
import Link from 'next/link'

type FeaturedPostProps = {
  imageUrl: any
  title: string
  slug: string
  category: string
  imagePriority?: boolean
}

export function FeaturedPost({
  imageUrl,
  title,
  slug,
  category,
  imagePriority,
}: FeaturedPostProps) {
  return (
    <figure className="relative group rounded-xl overflow-hidden">
      <Link href={slug}>
        <Image
          className="rounded-xl group-hover:scale-110 transition-all duration-500"
          src={imageUrl}
          alt={title}
          width={1280}
          height={853}
          priority={imagePriority}
        />

        <div className="absolute bottom-0 p-4 sm:py-8">
          <span className="text-white text-xs font-bold py-1 px-2 rounded bg-emerald-500">
            {category}
          </span>

          <h2 className="font-bold text-white hover:text-emerald-100 text-xl sm:text-2xl mt-2 transition-colors">
            {title}
          </h2>
        </div>
      </Link>
    </figure>
  )
}
