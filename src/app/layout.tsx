import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './provider'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Company Information Site',
  description: 'Developer project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <Providers>
                <Header />
                {children}
            </Providers>
        </body>
    </html>
  )
}
