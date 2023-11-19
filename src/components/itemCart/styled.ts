import styled from "styled-components";

export const Component=styled.div`
 width: 379px;
 height: 101px;
 display: flex;
 background-color: #ffffff;
 justify-content: space-around;
 align-items: center;
 border-radius: 8px;
 position: relative;
 .img{
   width: 20%;
 }
 .btnClosed{
   position: absolute;
   top:-4px;
   right: -4px;
   width: 17px;
 }
 .title{
    font-size: 13px;
    width: 25%;
 }
 .price{
    font-size: 14px;
    width: 20%;
 }
 .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px #BFBFBF;
    border-radius: 8px;
    gap: 5px;
    height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    .btnAdd{
        height: 19px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px; 
        border: none;
        width: 20px;
        background-color: #ffffff;
        border: solid .1rem #BFBFBF;
      
    }
    .btnRemove{
       height: 19px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        width: 20px;
        background-color: #ffffff;
        border: solid .1rem #BFBFBF;
        
    }
 }
`