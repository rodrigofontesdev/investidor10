'use client'

import { FeaturedPost } from '@/components/FeaturedPost'
import { PostWithoutImage } from '@/components/PostWithoutImage'
import { Skeleton } from '@/components/Skeleton'
import { useFetchFeaturedPosts } from '@/hooks/useFetchFeaturedPosts'

import placeHolderLargeImage from '@/assets/placeholder-960x600.svg'

export function FeaturedPosts() {
  const { featuredPosts, isLoading } = useFetchFeaturedPosts()

  return (
    <section className="max-w-screen-lg mx-auto pb-20 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-8/12">
        {featuredPosts && !isLoading ? (
          <FeaturedPost
            imageUrl={placeHolderLargeImage}
            title={featuredPosts[0].title}
            slug={'/noticias/' + featuredPosts[0].slug}
            category={featuredPosts[0].category.title}
            imageWidth={1280}
            imageHeight={853}
            imagePriority
          />
        ) : (
          <Skeleton width="w-full" height="h-[440px]" rounded="rounded-xl" />
        )}
      </div>

      <div className="w-full lg:w-4/12 flex flex-col sm:flex-row lg:flex-col gap-8">
        <div className="w-full sm:w-6/12 md:w-full">
          {featuredPosts && !isLoading ? (
            <PostWithoutImage
              title={featuredPosts[1].title}
              slug={'/noticias/' + featuredPosts[1].slug}
              shortDescription={featuredPosts[1].short_description}
              category={featuredPosts[1].category.title}
            />
          ) : (
            <Skeleton width="w-full" height="h-[200px]" rounded="rounded-xl" />
          )}
        </div>

        <div className="w-full sm:w-6/12 md:w-full">
          {featuredPosts && !isLoading ? (
            <PostWithoutImage
              title={featuredPosts[2].title}
              slug={'/noticias/' + featuredPosts[2].slug}
              shortDescription={featuredPosts[2].short_description}
              category={featuredPosts[2].category.title}
            />
          ) : (
            <Skeleton width="w-full" height="h-[200px]" rounded="rounded-xl" />
          )}
        </div>
      </div>
    </section>
  )
}
