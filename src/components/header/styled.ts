
import styled from "styled-components"

export const Container=styled.header`
height: 101px;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #0F52BA;
box-sizing: border-box;
overflow: hidden;
.boxLogo{
  margin-left: 44px;
  display: flex;
  gap: 5px;
}
.boxBtn{
  margin-right: 44px;
  
}
`
export const Title=styled.h1`
height: 44px;
font-size: 40px;
color: #ffffff;
display: flex;
align-items: center;

`
export const subTitle=styled.h1`
padding-top: 10px;
height: 44px;
display: flex;
align-items: end;
font-size: 18px;
opacity: 0.9;
color: #ffffff;

`
export const Button=styled.button`
  width: 90px;
  height: 44px;
  background-color: #FFFFFF;
  border-radius: 8px;
  font-size: 20px; 
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  border: none;
`