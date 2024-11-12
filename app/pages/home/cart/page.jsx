import React from 'react'
import ProductsTable from './components/ProductTable'
import TwoButtons from './components/TwoButtons'
import CouponAndCheckout from './components/CouponAndCheckout'
const Cart_Screen = () => {
  return (
    <>
      <ProductsTable/>
      <TwoButtons/>
      <CouponAndCheckout/>
    </>
  )
}

export default Cart_Screen
