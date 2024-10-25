import { api } from '@/lib/axios'
import { useInfiniteQuery } from '@tanstack/react-query'

type PostsByCategoryResponse = {
  data: {
    id: number
    title: string
    slug: string
    short_description: string
    content: string
    featured: boolean
    created_at: string
    updateda_at: string
    category: {
      id: number
      title: string
      slug: string
      created_at: string
      updateda_at: string
    }
  }[]
  links: {
    first: string | null
    last: string | null
    prev: string | null
    next: string | null
  }
  meta: {
    path: string
    perPage: number
    next_cursor: string | null
    prev_cursor: string | null
  }
}

type UseFetchPostsByCategoryProps = {
  categorySlug: string
  perPage?: number
}

export function useFetchPostsByCategory({ categorySlug, perPage }: UseFetchPostsByCategoryProps) {
  const {
    data: postsByCategory,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['postsByCategory', categorySlug],
    queryFn: async ({ pageParam }: { pageParam: string | null }) => {
      const response = await api.get<PostsByCategoryResponse>(`/categories/${categorySlug}`, {
        params: {
          perPage: perPage ?? '',
          orderBy: 'desc',
          cursor: pageParam,
        },
      })

      return response.data
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.meta.next_cursor,
  })

  return {
    postsByCategory: postsByCategory?.pages,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}
