import { ReactNode } from 'react'

type BreadcrumbItemProps = {
  children: ReactNode
  isMuted?: boolean
}

export function BreadcrumbItem({ children, isMuted }: BreadcrumbItemProps) {
  return (
    <li
      className={
        isMuted
          ? 'text-sm sm:text-xs'
          : 'text-sm sm:text-xs font-bold hover:text-emerald-500 transition-colors'
      }
    >
      {children}
    </li>
  )
}
