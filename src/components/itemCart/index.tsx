import Image from "next/image"
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react"
import * as C from "./styled"


interface IShoppingCartCardProps{
    src?:any
    name?:string | any
    price?:number
    onClick?:(e:any)=>void
    onClickAdd?:(e:any)=>void
    quantity?:number
}


export const ItemCart=(props:IShoppingCartCardProps)=>{

    
    
    return(
        <>
         <C.Component>
            <div className="img">
                <Image src={props.src} width={50} height={50} alt={props.name}/>
            </div>
             <IoIosCloseCircle className="btnClosed" onClick={props.onClick}/>
            <h1 className="title">
                {props.name}
            </h1>
            <div className="btn">
                <button className="btnRemove" onClick={props.onClick}>-</button>
                {props.quantity}
                <button className="btnAdd" onClick={props.onClickAdd}>+</button>
            </div>
            <strong className="price">
                R$ {props.price}
            </strong>
         </C.Component>
        </>
    )
}