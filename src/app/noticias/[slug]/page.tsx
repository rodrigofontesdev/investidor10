import Image from 'next/image'
import Link from 'next/link'

import facebookIconImage from '@/assets/facebook.svg'
import whatsAppIconImage from '@/assets/whatsapp.svg'
import xIconImage from '@/assets/x.svg'

export default async function SinglePost() {
  return (
    <main className="px-5">
      <article className="max-w-screen-lg mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl md:text-3xl font-bold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </h1>

            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quisquam excepturi
              numquam debitis hic nobis cum, voluptatem accusantium consequatur aspernatur, vitae,
              quae illo assumenda rerum. Quo aliquid odio earum quis.
            </p>
          </div>

          <div className="flex flex-shrink-0 gap-x-2">
            <Link href="#" className="hover:scale-105 transition-all">
              <Image
                src={facebookIconImage}
                alt="Compartilhar no Facebook"
                width={30}
                height={34}
              />
            </Link>

            <Link href="#" className="hover:scale-105 transition-all">
              <Image
                src={whatsAppIconImage}
                alt="Compartilhar no WhatsApp"
                width={30}
                height={34}
              />
            </Link>

            <Link href="#" className="hover:scale-105 transition-all">
              <Image src={xIconImage} alt="Compartilhar no X" width={30} height={34} />
            </Link>
          </div>
        </header>

        <figure className="mb-10 overflow-hidden">
          <Image
            className="object-contain rounded-xl mb-2"
            src="https://picsum.photos/1280/500"
            alt="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
            width={1280}
            height={500}
            priority
          />
          <figcaption className="italic text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </figcaption>
        </figure>

        <div id="post-content" className="mb-20">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est lorem, viverra eu
            purus ac, convallis suscipit ex. Morbi fermentum vestibulum diam pulvinar fermentum.
            Vestibulum vestibulum libero magna, vitae fringilla mi semper a. Nunc commodo eget arcu
            at rhoncus. Maecenas a mi enim. Vestibulum id tortor at mi pellentesque volutpat non
            lobortis arcu. Donec ipsum lectus, laoreet vel placerat in, commodo posuere leo. Aliquam
            commodo ante euismod, ullamcorper tortor eget, ullamcorper enim. Ut blandit arcu mauris,
            et aliquet mauris imperdiet eget. Vivamus volutpat metus est, vel aliquet nisi cursus
            ut. Aliquam non tortor eget justo volutpat dictum at id erat. Sed eu feugiat est. Nulla
            efficitur sodales faucibus. Ut vel dui vel magna tempus eleifend vel nec augue. Nullam
            egestas quis magna lobortis blandit.
          </p>

          <p>
            Suspendisse ut quam vel enim egestas convallis sit amet et massa. In tempor, purus non
            posuere accumsan, turpis est vestibulum neque, ac faucibus sem sem eget nunc. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce
            mollis risus nibh, et auctor nulla hendrerit et. Morbi gravida pretium massa eu
            porttitor. Fusce eu justo porta, egestas est ac, fringilla quam. Pellentesque in nibh
            sodales, tincidunt orci at, convallis felis. Proin sagittis sollicitudin tellus. Etiam
            euismod maximus neque et accumsan.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus ultrices ante, nec
            sagittis enim tincidunt et. Quisque laoreet felis vitae sodales efficitur. Curabitur
            eget cursus tortor. Nulla pretium imperdiet dui vitae ultrices. Vestibulum feugiat
            congue lacus, non cursus odio commodo ac. Ut ut euismod tortor.
          </p>

          <p>
            Ut tristique vel quam quis ultrices. Pellentesque sollicitudin cursus vulputate. Aenean
            et nibh vel nibh imperdiet imperdiet. In a lectus id sem tincidunt pharetra. Nunc
            vulputate neque eget nulla pharetra molestie. Suspendisse non lacus pellentesque, porta
            nibh sit amet, feugiat mi. Pellentesque suscipit blandit pretium. Donec vitae tellus
            consequat, aliquet felis nec, dignissim libero. Donec euismod mi vitae posuere suscipit.
            Nam fringilla eros vitae erat placerat, laoreet sollicitudin magna sagittis.
          </p>

          <p>
            Sed pulvinar finibus ante at feugiat. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Mauris non orci purus. Etiam et
            urna quis eros venenatis tempus. In sagittis quam non ipsum rhoncus, id condimentum
            neque tincidunt. Sed leo justo, dictum vitae tincidunt sit amet, ultrices sit amet
            ligula. Nullam sed ligula ut magna suscipit porttitor. Duis tincidunt commodo nibh,
            sollicitudin maximus eros tristique sed. Vivamus sit amet tincidunt felis. Nullam eget
            urna auctor, porttitor mi sit amet, auctor nisl. Sed vel ultrices diam.
          </p>

          <p>
            Maecenas aliquam placerat odio nec malesuada. Nulla vitae risus sit amet mauris iaculis
            ultrices eu eu eros. Suspendisse metus arcu, faucibus non nunc ut, lobortis congue
            risus. Pellentesque mollis sodales diam, sed viverra turpis bibendum nec. Mauris odio
            purus, vulputate eget nulla laoreet, tempor euismod turpis. Aliquam rhoncus pharetra
            tellus, vitae imperdiet metus ullamcorper a. Cras fermentum, lectus ut feugiat ornare,
            est elit iaculis ex, quis dignissim erat ligula eget felis. Donec porta tincidunt enim,
            at hendrerit est euismod ac. Morbi efficitur lorem sapien, at interdum lorem consequat
            a. Quisque vehicula justo mattis nibh ultricies euismod. Donec tempor nulla justo, eu
            pellentesque eros dapibus id. Aenean sapien est, viverra a ligula nec, scelerisque
            faucibus odio.
          </p>

          <p>
            Cras nec magna ut libero porttitor luctus in eu ipsum. Donec iaculis convallis aliquam.
            Sed felis enim, sagittis elementum congue in, suscipit a sapien. Ut dignissim, mauris
            sed suscipit lacinia, sapien justo varius mauris, et iaculis ipsum dolor nec ante. Nam
            tristique gravida euismod. Nam metus risus, egestas sit amet fermentum et, facilisis ut
            ante. Praesent bibendum fringilla cursus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Cras nisi erat, malesuada id aliquet bibendum,
            iaculis sit amet nulla. Nam ut felis nec nulla vulputate sagittis. Morbi eu condimentum
            magna, nec rutrum ante. Nullam mattis id lorem at hendrerit. Vestibulum ullamcorper,
            dolor quis ornare malesuada, elit massa porttitor tellus, et feugiat ipsum nunc in nisl.
          </p>

          <p>
            Aenean vitae mollis nunc. Vestibulum porta dapibus viverra. Phasellus leo ante, bibendum
            eget odio in, lacinia malesuada nunc. Donec tincidunt sapien non dignissim finibus. Sed
            ornare purus in ultricies maximus. Vivamus suscipit mauris massa, eget rhoncus libero
            luctus et. Fusce eu velit facilisis, imperdiet sem vitae, euismod sem. Phasellus justo
            enim, dictum in rutrum in, pulvinar eu orci. Vestibulum gravida suscipit nulla, id
            tincidunt ex tristique quis. Curabitur tincidunt interdum lectus ac luctus. Proin
            tincidunt quis lorem sagittis commodo. Quisque feugiat semper tellus nec placerat.
          </p>
        </div>
      </article>
    </main>
  )
}
