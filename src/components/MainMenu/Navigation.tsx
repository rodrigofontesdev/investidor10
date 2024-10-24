import { ReactNode } from 'react'

type NavigationProps = {
  children: ReactNode
}

export function Navigation({ children }: NavigationProps) {
  return (
    <nav className="flex md:inline-flex flex-col md:flex-row md:gap-x-10 list-none">{children}</nav>
  )
}
