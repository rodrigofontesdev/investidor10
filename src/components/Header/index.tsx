'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MainMenu } from '../MainMenu'

export function Header() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)
  const route = usePathname()

  function handleToggleMobileMenu() {
    setIsMobileMenuActive(!isMobileMenuActive)
  }

  return (
    <header className="mb-10 px-5">
      <div className="max-w-screen-lg mx-auto flex justify-between items-end border-b border-b-slate-200">
        <h1 className="text-5xl font-bold tracking-tighter self-center">
          <Link href="/">
            10News<span className="text-emerald-500">.</span>
          </Link>
        </h1>

        <MainMenu.Root>
          <MainMenu.OpenButton onOpen={() => handleToggleMobileMenu()} />

          <MainMenu.Navigator isMobileMenuActive={isMobileMenuActive}>
            <MainMenu.CloseButton onClose={() => handleToggleMobileMenu()} />

            <MainMenu.Navigation>
              <MainMenu.NavigationLink href="/" text="Home" isActive={route === '/'} />
              <MainMenu.NavigationLink
                href="/noticias/categoria/economia"
                text="Economia"
                isActive={route === '/noticias/categoria/economia'}
              />
              <MainMenu.NavigationLink href="/noticias/categoria/mercados" text="Mercados" />
              <MainMenu.NavigationLink
                href="/noticias/categoria/internacional"
                text="Internacional"
              />
            </MainMenu.Navigation>
          </MainMenu.Navigator>
        </MainMenu.Root>
      </div>
    </header>
  )
}
