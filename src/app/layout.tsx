"use client"

import GlobalStyles from '@/styles/globalStyles'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <GlobalStyles />
      <body>{children}</body>
    </html>
  )
}
