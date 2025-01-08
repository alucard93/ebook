import type { Metadata } from 'next'
import './globals.css'
import { montserrat } from './_lib/fonts'

export const metadata: Metadata = {
  title: 'Ebook Inteligência Artificial',
  description:
    'Baixe agora nosso ebook exclusivo e veja como a Inteligência Artificial pode revolucionar a experiência de compra, aumentar a fidelização e maximizar os lucros do seu supermercado',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-light antialiased`}>
        {children}
      </body>
    </html>
  )
}
