import { useState } from "react";
import * as H from "./styled"
import { FaCartArrowDown } from "react-icons/fa";
import { Navbar } from "../navbar";

interface IHeaderProps{
  count:number
  onClickAdd?: ()=>void
  onClickRemove?: ()=>void
}
export const Header=(props:IHeaderProps)=>{

    return(
    <>
      <H.Container>
         <div className="boxLogo">
             <H.Title> MKS </H.Title>
             <H.subTitle>sistemas </H.subTitle>
         </div>
         <div className="boxBtn">
            <H.Button onClick={props.onClickAdd}>
              < FaCartArrowDown /> <strong>{props.count}</strong>
            </H.Button>
    
         </div>
     </H.Container>    
    </>)
}