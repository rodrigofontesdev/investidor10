import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

type PostResponse = {
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
  }
}

type UseFetchPostProps = {
  postSlug: string
}

export function useFetchPost({ postSlug }: UseFetchPostProps) {
  const { data: post, isLoading } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const response = await api.get<PostResponse>(`/news/${postSlug}`)

      return response.data.data
    },
  })

  return {
    post,
    isLoading,
  }
}
