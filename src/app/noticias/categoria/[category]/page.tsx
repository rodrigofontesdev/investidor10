'use client'

import { Post } from '@/components/Post'
import { Skeleton } from '@/components/Skeleton'
import { useFetchPostsByCategory } from '@/hooks/useFetchPostsByCategory'
import { use } from 'react'

import placeHolderExtraLargeImage from '@/assets/placeholder-1024x450.svg'

type SingleCategoryProps = Promise<{ category: string }>

export default function SingleCategory(props: { params: SingleCategoryProps }) {
  const { category } = use(props.params)

  const { postsByCategory, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useFetchPostsByCategory({
      categorySlug: category,
      perPage: 6,
    })

  const isLoadMoreButtonDisabled = !hasNextPage || isFetchingNextPage

  return (
    <div className="flex flex-col gap-y-20 mb-20">
      {postsByCategory && !isLoading
        ? postsByCategory.map((group) =>
            group.data.map((post, i) => (
              <div key={post.id} className="w-full">
                <Post
                  imageUrl={placeHolderExtraLargeImage}
                  imageWidth={1024}
                  title={post.title}
                  slug={'/noticias/' + post.slug}
                  shortDescription={post.short_description}
                  category={post.category.title}
                  imagePriority={i === 0}
                />
              </div>
            ))
          )
        : Array.from({ length: 3 }, (_, i) => i + 1).map((post) => (
            <div key={post} className="w-full">
              <Skeleton width="w-full" height="h-[450px]" rounded="rounded-xl" />
            </div>
          ))}

      <button
        disabled={isLoadMoreButtonDisabled}
        onClick={() => fetchNextPage()}
        className="mx-auto bg-slate-500 disabled:hover:bg-slate-500 hover:bg-slate-600 text-white font-bold py-3 px-9 rounded disabled:cursor-not-allowed transition-colors"
      >
        {isFetchingNextPage
          ? 'Carregando notícias...'
          : hasNextPage
          ? 'Carregar mais notícias'
          : 'Sem mais notícias :('}
      </button>
    </div>
  )
}
