import { ReactNode } from 'react'

type NavigatorProps = {
  children: ReactNode
  isMobileMenuActive: boolean
}

export function Navigator({ children, isMobileMenuActive }: NavigatorProps) {
  return (
    <div
      className="fixed md:block md:relative top-0 md:top-auto right-0 md:right-auto bottom-0 md:bottom-auto transform md:transform-none translate-x-[360px] md:translate-x-0 data-[mobile-menu-active=true]:translate-x-0 z-[9999] md:z-auto bg-slate-50 md:bg-transparent w-full md:w-auto max-w-[360px] md:max-w-none py-6 md:py-0 px-10 md:px-0 transition-transform md:transition-none duration-500 md:duration-0"
      data-mobile-menu-active={isMobileMenuActive}
    >
      {children}
    </div>
  )
}
