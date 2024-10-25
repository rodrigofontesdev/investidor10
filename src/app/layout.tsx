import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import ReactQueryProvider from '../providers/ReactQueryProvider'

import './globals.css'

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '10News',
  description:
    'Descubra os últimos artigos sobre investimentos alternativos, startups, fintechs, crowdfunding e muito mais.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>
        <ReactQueryProvider>
          <Header />

          <main className="px-5">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
