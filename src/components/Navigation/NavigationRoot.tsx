import { ReactNode } from 'react'

type NavigationRootProps = {
  children: ReactNode
}

export function NavigationRoot({ children }: NavigationRootProps) {
  return <nav className="inline-flex gap-x-10 list-none">{children}</nav>
}
