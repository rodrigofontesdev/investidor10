import { Header } from '@/components/Header'
import { Post } from '@/components/Post'
import { FeaturedPosts } from './components/FeaturedPosts'

export default function Home() {
  return (
    <>
      <Header />

      <main className="px-5">
        <FeaturedPosts />

        <section className="max-w-screen-lg mx-auto pb-20 flex flex-col gap-y-4">
          <h2 className="border-b pb-4 mb-8 text-3xl font-bold">
            Economia<span className="text-emerald-500">.</span>
          </h2>

          <div className="w-full flex flex-wrap justify-between gap-x-4 gap-y-12 pb-10">
            {Array.from({ length: 6 }, (_, i) => i + 1).map((post) => (
              <div key={post} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)]">
                <Post
                  imageUrl="https://picsum.photos/1280/853"
                  title="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
                  slug="/noticias/lorem"
                  category="Economia"
                />
              </div>
            ))}
          </div>

          <button className="mx-auto bg-slate-500 hover:bg-slate-600 text-white font-bold py-3 px-9 rounded transition-colors">
            Carregar mais notícias
          </button>
        </section>
      </main>
    </>
  )
}
