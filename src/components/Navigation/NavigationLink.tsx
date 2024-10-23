import Link, { LinkProps } from 'next/link'

type NavigationLinkProps = {
  text: string
  isActive?: boolean
} & LinkProps

export function NavigationLink({ text, isActive, ...props }: NavigationLinkProps) {
  return (
    <Link
      className="block font-bold py-10 border-b-2 border-transparent data-[active=true]:border-emerald-500 hover:border-emerald-500 transition-colors duration-500"
      data-active={isActive}
      {...props}
    >
      {text}
    </Link>
  )
}
