import Link, { LinkProps } from 'next/link'

type BreadcrumbLinkProps = {
  text: string
} & LinkProps

export function BreadcrumbLink({ text, ...props }: BreadcrumbLinkProps) {
  return (
    <Link className="after:content-['/'] after:ml-2 after:hover:text-black" {...props}>
      {text}
    </Link>
  )
}
