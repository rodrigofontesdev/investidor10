import { ReactNode } from 'react'

type BreadcrumbRootProps = {
  children: ReactNode
}

export function BreadcrumbRoot({ children }: BreadcrumbRootProps) {
  return (
    <ul className="w-full inline-flex flex-wrap gap-x-2 list-none bg-slate-100 rounded p-4 mb-10">
      {children}
    </ul>
  )
}
