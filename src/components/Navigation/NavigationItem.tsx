import { ReactNode } from 'react'

type NavigationItemProps = {
  children: ReactNode
}

export function NavigationItem({ children }: NavigationItemProps) {
  return <li>{children}</li>
}
