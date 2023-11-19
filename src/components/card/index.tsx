import Image from "next/image"
import { FiShoppingBag } from "react-icons/fi";
import * as C from "./styled"
import {motion} from "framer-motion"

interface ICardProps{
  children?: React.ReactNode
  src?:any
  name?: string | any
  price?: number
  description?: string
  onClick?:(e:any)=> void
}
export const Card=(props:ICardProps)=>{
    return(
    <>
      <C.Container>
         <motion.div  className="boxImage"  whileHover={{ scale: 1, rotate: 360 }}
           whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }} transition={{
            delayChildren: 0.2, staggerChildren: 1}}>
           <Image src={props.src} width={111} height={138} alt={props.name}/>
         </motion.div>
         <C.TextBox>
           <div className="boxTitle">
            {props.name}
           </div>
           <div className="boxPrice">
              {props.price}
           </div>
         </C.TextBox>
         <C.subTitle>
          {props.description}
         </C.subTitle>
         <C.Button onClick={props.onClick}>
          <FiShoppingBag/> Comprar
         </C.Button>
     </C.Container>    
    </>)
}