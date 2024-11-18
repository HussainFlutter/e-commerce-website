"use client"
import React ,{useEffect,useState} from 'react'
import CartProductsTable from './components/CartProductTable'
import TwoButtons from './components/TwoButtons'
import CouponAndCheckout from './components/CouponAndCheckout'
import { getCartProducts } from '@/app/actions/cart_actions'


const Cart_Screen = () => {
  const [loading, setLoading] = useState(true)
  const [cartProducts, setCartProducts] = useState([])
  const [refresh, setRefresh] = useState(false)
  const getProducts = async ()=>{
    setCartProducts( await getCartProducts())
    setRefresh(false);
    setLoading(false);
  }
  useEffect(() => {
    getProducts()
  }, [refresh])

  

  return (
    
    loading == false && cartProducts != null? 
    <>
      <CartProductsTable cartProducts= {cartProducts} setRefresh = {setRefresh}/>
      <TwoButtons/>
      <CouponAndCheckout cartProducts={cartProducts}/>
    </>
      : cartProducts == null ? <div className='text-2xl font-bold grid h-screen place-items-center' >Add Products to Cart</div> : <div className='text-2xl font-bold grid h-screen place-items-center'>Loading...</div>
  )
}

export default Cart_Screen
