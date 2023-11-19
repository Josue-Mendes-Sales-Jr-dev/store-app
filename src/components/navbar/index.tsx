import { IoIosCloseCircle } from "react-icons/io";

import {Component,Content,NavbarFooter} from "./styled"

interface INavbarProps{
    children?: React.ReactNode
    disp?: boolean
    total?:number
    onClick: ()=> void
}

export const Navbar=(props:INavbarProps)=>{
   
    return(
        <>
        <Component disp={props.disp}>
            <header>
                <h1>
                    Carrinho de compras
                </h1>
                <button onClick={props.onClick}>
                      <IoIosCloseCircle/>
                </button>
            </header>
            <Content>
                <div className="box">{props.children}</div>
             </Content>
            <div className="Price">
                <strong>Total:</strong>
                <strong>{props.total},00</strong>
            </div>
            <NavbarFooter>
                Finalizar Compra
            </NavbarFooter>
        </Component>
        </>
    )
}

