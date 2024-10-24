import Link, { LinkProps } from 'next/link'

type NavigationLinkProps = {
  text: string
  isActive?: boolean
} & LinkProps

export function NavigationLink({ text, isActive, ...props }: NavigationLinkProps) {
  return (
    <li className="mt-10 md:mt-0">
      <Link
        className="block text-xl md:text-base font-bold pb-2 md:py-10 border-b-2 border-transparent data-[active=true]:border-emerald-500 hover:border-emerald-500 transition-colors duration-500"
        data-active={isActive}
        {...props}
      >
        {text}
      </Link>
    </li>
  )
}
