import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return <>{children}</>
}
