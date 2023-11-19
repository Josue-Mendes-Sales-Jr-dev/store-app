import { Footer } from "../footer"
import * as C from "./styled"
interface ILayoutProps{
  children: React.ReactNode
}
export const Layout=(props:ILayoutProps)=>{
    return(
    <>
      <C.Container>
          {props.children}
          <Footer/>
     </C.Container>    
    </>)
}