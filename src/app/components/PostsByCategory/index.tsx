'use client'

import { Post } from '@/components/Post'
import { Skeleton } from '@/components/Skeleton'
import { useFetchPostsByCategory } from '@/hooks/useFetchPostsByCategory'

import placeHolderMediumImage from '@/assets/placeholder-600x400.svg'

type PostsByCategoryProps = {
  slug: string
  title: string
}

export function PostsByCategory({ slug, title }: PostsByCategoryProps) {
  const { postsByCategory, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useFetchPostsByCategory({
      categorySlug: slug,
      perPage: 6,
    })

  const isLoadMoreButtonDisabled = !hasNextPage || isFetchingNextPage

  return (
    <section className="max-w-screen-lg mx-auto pb-20 flex flex-col gap-y-4">
      <h2 className="border-b pb-4 mb-8 text-3xl font-bold">
        {title}
        <span className="text-emerald-500">.</span>
      </h2>

      <div className="w-full flex flex-wrap justify-between gap-x-4 gap-y-12 pb-20">
        {postsByCategory && !isLoading
          ? postsByCategory.map((group) =>
              group.data.map((post) => (
                <div key={post.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)]">
                  <Post
                    imageUrl={placeHolderMediumImage}
                    imageWidth={600}
                    imageHeight={400}
                    title={post.title}
                    slug={'/noticias/' + post.slug}
                    shortDescription={post.short_description}
                    category={post.category.title}
                  />
                </div>
              ))
            )
          : Array.from({ length: 3 }, (_, i) => i + 1).map((post) => (
              <div key={post} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)]">
                <Skeleton width="w-full" height="h-[450px]" rounded="rounded-xl" />
              </div>
            ))}
      </div>

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
    </section>
  )
}
