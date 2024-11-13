import React from 'react'
import Separator from '@/app/components/Separator'
 import CustomButton from '@/app/components/CustomButton'
const CheckoutBox = () => {
  return (
    <div className='pb-6'>
      <div className='flex flex-col w-96 py-5 px-4 gap-2 border border-black'>
      <p className='font-bold text-xl pl-2 pb-3'>Cart Total</p>
      <div className='flex justify-between'>
      <p>Subtotal</p>
      <p>$225</p>
      </div>
      <Separator/>  
      <div className='flex justify-between'>
      <p>
        Shipping
      </p>
      <p>Free</p>
      </div>
      <Separator/>  
      <div className='flex justify-between'>
      <p>Total</p>
      <p>$225</p>
      </div>
      <div className=' flex justify-center'>
      <CustomButton title={"Process to checkout"}/>
      </div>
      </div>
    </div>
  )
}

export default CheckoutBox
