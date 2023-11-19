import { createGlobalStyle } from "styled-components";

export default  createGlobalStyle`
    :root {
        --font-sans:'Montserrat', sans-serif;
        --background: #F9F9F9;
        --primary: #0F52BA;
        --white: #fff
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        font-family: var(--font-sans);
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