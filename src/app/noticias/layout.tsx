import { Breadcrumb } from '@/components/Breadcrumb'
import { ReactNode } from 'react'

type ArchiveLayout = {
  children: ReactNode
}

export default async function ArchiveLayout({ children }: ArchiveLayout) {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <Breadcrumb.Root>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/" text="Home" />
          </Breadcrumb.Item>

          <Breadcrumb.Item isMuted>Notícias</Breadcrumb.Item>
        </Breadcrumb.Root>
      </div>

      <section className="max-w-screen-lg mx-auto">{children}</section>
    </>
  )
}
