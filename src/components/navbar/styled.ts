import styled from "styled-components";

interface INavbarProps{
    disp?:boolean
}

export const Component=styled.div<INavbarProps>`
height: 100vh;
width: 486px;
background-color: #0F52BA;
display: ${props=>props.disp?"flex":"none"};
flex-direction: column;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0px;
right: 0px;
box-shadow: 1px 1px 7px .34px black;


header{
    display: flex;
    width: 84%;
    padding-left: 10px;
    justify-content: space-between;
    color: #ffffff;
    h1{
        width: 180px;
        font-size: 27px;
        padding-top:1.2rem ;
    }
    button{
        background: none;
        border: none;
        font-size: 38px;
    }
    
}
.Price{
        display: flex;
        width: 70%;
        justify-content: space-between;
        color: #FFFFFF;
        font-size: 28px;
        
    }
`
export const Content=styled.div`
  width: 85%;
  height: 53%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1px;
  overflow: hidden;
  overflow-y:auto;
  gap:1rem;
  .box{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`
export const NavbarFooter=styled.div`
width: 486px;
height: 97px;
background-color: #000000;
font-size: 28px;
color: #ffffff;
display: flex;
justify-content: center;
align-items: center;
`