import { FeaturedPosts } from './components/FeaturedPosts'
import { PostsByCategory } from './components/PostsByCategory'

export default function Home() {
  return (
    <>
      <FeaturedPosts />

      <PostsByCategory slug="economia" title="Economia" />
      <PostsByCategory slug="mercados" title="Mercados" />
      <PostsByCategory slug="internacional" title="Internacional" />
    </>
  )
}
