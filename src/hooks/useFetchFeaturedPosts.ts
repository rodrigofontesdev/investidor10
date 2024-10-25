import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

type FeaturedPostsResponse = {
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

export function useFetchFeaturedPosts() {
  const { data: featuredPosts, isLoading } = useQuery({
    queryKey: ['featuredPosts'],
    queryFn: async () => {
      const response = await api.get<FeaturedPostsResponse>('/news', {
        params: {
          featured: 'true',
          orderBy: 'desc',
        },
      })

      return response.data.data
    },
  })

  return {
    featuredPosts,
    isLoading,
  }
}
