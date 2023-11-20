import { Layout } from '@/components/layout'
import {Card} from '../components/card'
import * as H from '../styles/styled'
import { Navbar } from '@/components/navbar'
import { useState } from 'react'
import { ItemCart } from '@/components/itemCart'
import { Header } from '@/components/header'

const link= "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC"

interface IProductProps{
  name: any
  id:number
  nome:string
  brand:string
  description:string
  photo:string
  price: number

}

interface IShoppingCart{
  products: IProductProps
  quantity: number
}

export async function getServerSideProps(){
  const data= await fetch(link)
  const res= await data.json()
  return{
    props:{
      data:res.products
    }
  }
}

export default function Home({data}:any) {
   
  const[shoppingCart, setShoppingCart]=useState<IShoppingCart[]>([])
  const[show, setShow]=useState(false)

  const handleAdd=(id:number)=>{
     const items=data.find((item:IProductProps)=> item.id===id)
      
    const thereIsAlreadyAnItemInTheShoppingCart=shoppingCart.find((items)=>items.products.id===id)
      if(thereIsAlreadyAnItemInTheShoppingCart){
        const newItems:IShoppingCart[]=shoppingCart.map((items)=>{
         if(items.products.id===id)({
           ...items,
           quantity: items.quantity++
          }) 
          return items;
        })
         setShoppingCart(newItems) 
         return
      }
      
     const newItems:IShoppingCart={
      products: items!,
      quantity:1,
     }
     const newShoppingCart=[...shoppingCart, newItems]
     setShoppingCart(newShoppingCart)
     console.log( shoppingCart)
  }

     const handleRemove=(id:number)=>{
      
      const thereIsAlreadyAnItemInTheShoppingCart=shoppingCart.find((items)=>items.products.id===id)
        if(thereIsAlreadyAnItemInTheShoppingCart!.quantity>1){
          const newItems:IShoppingCart[]=shoppingCart.map((items)=>{
           if(items.products.id===id)({
             ...items,
             quantity: items.quantity--
            }) 
            return items;
          })
           setShoppingCart(newItems) 
           return
        }

      const filterShoppingCart=shoppingCart.filter(items=> items.products.id!==id)
      setShoppingCart(filterShoppingCart)
  }
  
    const TotalCart=shoppingCart.reduce((total, add)=>{
      return total + (add.products.price*add.quantity)}, 0)
    
    const TotalQuantityCar=shoppingCart.reduce((total, add)=>{
      return total + add.quantity}, 0)

    const btnToggleShow =()=>{
      setShow(show=>!show)
    }


  return (
    <>
     <Layout>
     <Header count={TotalQuantityCar} onClickAdd={btnToggleShow}/>
      <H.Container>
         {
            data.map((items:IProductProps)=>(
              <Card key={items.id} onClick={()=>{handleAdd(items.id)}} name={items.name} src={items.photo} description={items.description} price={items.price}/>
            ))
          }
      </H.Container>
      <Navbar total={TotalCart} disp={show} onClick={btnToggleShow}>
        { shoppingCart.map((items)=>(
         <ItemCart onClickAdd={()=>{handleAdd(items.products.id)}} onClick={()=>{handleRemove(items.products.id)}} quantity={items.quantity} key={items.products.id} src={items.products.photo} name={items.products.name} price={items.products.price*items.quantity}/>
        ))}
      </Navbar>
     </Layout>
    </>
  )
}
