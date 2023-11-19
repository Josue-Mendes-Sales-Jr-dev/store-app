
import styled from "styled-Components"

export const Container=styled.div`
 .boxImage{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 138px;
 }
 .boxTitle{
    width: 110px;
 }
 .boxPrice{
    color:white;
    background-color: black;
    padding: .3rem;
    border-radius: 4px;
 }
 border: none;
 height: 285px;
 width: 218px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 background-color: #FFFFFF;
 box-shadow: .2px .1px 4px .1px gray;
 border-radius:8px;
 overflow: hidden;
`

export const TextBox=styled.div`
 display: flex;
 align-items: center;
 font-size: 16px;
 gap: 10px;
 color: #2c2c2c;
 width:192px;

`
export const subTitle=styled.p`
 width:192px;
 height: 25px;
 font-size: 10px;
 color: #2c2c2c;
`
export const Button=styled.button`
 width:218px;
 height: 31.91px;
 background-color:#0F52BA;
 color: #FFFFFF;
 border: none;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 7px;
 font-size:14;
 text-transform: uppercase;
 &:hover{
   background-color:#0c4A90;
 }
`