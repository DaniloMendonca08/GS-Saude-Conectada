"use client"

import GlobalStyles from '@/styles/globalStyles'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { StyleSheetManager } from 'styled-components'
import isPropValid from "@emotion/is-prop-valid"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <GlobalStyles />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      </StyleSheetManager>
    </html>
  )
}
