'use client'

import { Skeleton } from '@/components/Skeleton'
import { useFetchPost } from '@/hooks/useFetchPost'
import Image from 'next/image'
import Link from 'next/link'
import { use } from 'react'

import facebookIconImage from '@/assets/facebook.svg'
import placeHolderExtraLargeImage from '@/assets/placeholder-1024x450.svg'
import whatsAppIconImage from '@/assets/whatsapp.svg'
import xIconImage from '@/assets/x.svg'

type SingleCategoryProps = Promise<{ slug: string }>

export default function SinglePost(props: { params: SingleCategoryProps }) {
  const { slug } = use(props.params)
  const { post, isLoading } = useFetchPost({
    postSlug: slug,
  })

  const postContent = post?.content.split('\n\n')

  return (
    <article className="max-w-screen-lg mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div className="flex flex-col gap-y-2 w-full">
          {isLoading ? (
            <>
              <Skeleton width="w-full" height="h-[80px]" rounded="rounded" />
              <Skeleton width="w-full" height="h-[40px]" rounded="rounded" />
            </>
          ) : (
            <>
              <h1 className="text-2xl md:text-3xl font-bold">{post?.title}</h1>

              <p className="text-sm">{post?.short_description}</p>
            </>
          )}
        </div>

        <div className="flex flex-shrink-0 gap-x-2">
          {isLoading ? (
            <Skeleton width="w-[106px]" height="h-[34px]" rounded="rounded" />
          ) : (
            <>
              <Link href="#" className="hover:scale-105 transition-all">
                <Image
                  src={facebookIconImage}
                  alt="Compartilhar no Facebook"
                  width={30}
                  height={34}
                />
              </Link>

              <Link href="#" className="hover:scale-105 transition-all">
                <Image
                  src={whatsAppIconImage}
                  alt="Compartilhar no WhatsApp"
                  width={30}
                  height={34}
                />
              </Link>

              <Link href="#" className="hover:scale-105 transition-all">
                <Image src={xIconImage} alt="Compartilhar no X" width={30} height={34} />
              </Link>
            </>
          )}
        </div>
      </header>

      <figure className="mb-10 overflow-hidden">
        {isLoading ? (
          <Skeleton width="w-full" height="h-[500px]" rounded="rounded-xl" />
        ) : (
          <>
            <Image
              className="object-contain rounded-xl mb-2"
              src={placeHolderExtraLargeImage}
              alt="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
              width={1280}
              height={500}
              priority
            />

            <figcaption className="italic text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </figcaption>
          </>
        )}
      </figure>

      <div id="post-content" className="mb-20">
        {postContent?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
