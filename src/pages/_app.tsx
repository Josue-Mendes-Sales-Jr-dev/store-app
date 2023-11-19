"use Client"



import { CartProvider } from "@/components/context"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  font-size: 'Montserrat', sans-serif;
}
  body {
    font-size: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    scroll-behavior: smooth;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    width: 8px;      }
    ::-webkit-scrollbar-track {
      border-radius: 20px;
    background: #ffffff;    }    
    ::-webkit-scrollbar-thumb {
      background-color:#0F32cA;
      border-radius: 20px;
    }    
}
  
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }:any) {
  return (
    <>
      <CartProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CartProvider>
    </>
  )
}