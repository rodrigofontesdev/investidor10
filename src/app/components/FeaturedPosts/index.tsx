import { FeaturedPost } from '@/components/FeaturedPost'
import { PostWithoutImage } from '@/components/PostWithoutImage'

export function FeaturedPosts() {
  return (
    <section className="max-w-screen-lg mx-auto pb-20 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-8/12">
        <FeaturedPost
          imageUrl="https://picsum.photos/1280/853"
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
          slug="/noticias/lorem"
          category="Criptomoedas"
          imagePriority
        />
      </div>

      <div className="w-full lg:w-4/12 flex flex-col sm:flex-row lg:flex-col gap-8">
        <div className="w-full sm:w-6/12 md:w-full">
          <PostWithoutImage
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
            slug="/noticias/lorem"
            category="Criptomoedas"
          />
        </div>

        <div className="w-full sm:w-6/12 md:w-full">
          <PostWithoutImage
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
            slug="/noticias/lorem"
            category="Criptomoedas"
          />
        </div>
      </div>
    </section>
  )
}
