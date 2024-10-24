import { Post } from '@/components/Post'

export default function SingleCategory() {
  return (
    <div className="flex flex-col gap-y-20 mb-20">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((post) => (
        <div key={post} className="w-full">
          <Post
            imageUrl="https://picsum.photos/1280/500"
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
            slug="/noticias/lorem"
            category="Economia"
          />
        </div>
      ))}

      <button className="mx-auto bg-slate-500 hover:bg-slate-600 text-white font-bold py-3 px-9 rounded transition-colors">
        Carregar mais notícias
      </button>
    </div>
  )
}
