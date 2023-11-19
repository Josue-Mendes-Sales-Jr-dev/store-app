"use Client"


import { CartProvider } from "@/components/context"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "@/styles/globalStyles"


const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }:any) {
  return (
    <>
      <CartProvider>
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </>
  )
}