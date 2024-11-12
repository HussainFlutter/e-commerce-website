import React from 'react'
import Coupon from './Coupon'
import CheckoutBox from './CheckoutBox'
const CouponAndCheckout = () => {
  return (
    <div className='flex justify-between px-6'>
      <Coupon/>
      <CheckoutBox/>
    </div>
  )
}

export default CouponAndCheckout
