import styled from "styled-components";


export const Container=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:1rem;
  max-width:938px;
  min-height:601px;
  flex-wrap: wrap;
  @media screen and (max-width:1000px){
    margin: 5rem 0;
  }
`