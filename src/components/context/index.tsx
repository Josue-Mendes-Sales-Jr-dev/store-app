import {createContext} from "react"


export const CartContext=createContext({})


export const CartProvider=({children}:any)=>{
    

    return(
    <CartContext.Provider value={{}}>
       {children}
    </CartContext.Provider>
    )
}

