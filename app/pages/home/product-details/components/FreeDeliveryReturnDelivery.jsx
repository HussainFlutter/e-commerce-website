import React from 'react'

const FreeDeliveryReturnDelivery = () => {
  return (
    <div className='border border-black flex flex-col mt-10'>
      <div className='flex border-0 border-black border-b-[1px] py-6 px-3 items-center gap-2'>
        <img src="/fill_delivery_icon.png" alt="delivery"/>
        <div className='flex flex-col'>
        <h3>Free Delivery</h3>
        <p className='text-sm' >Enter your postal code for Delivery Availability</p>
        </div>
      </div>
      <div className='flex py-6 px-3 items-center gap-2'>
      <img src="/return_icon.png" alt="return" />
        <div className='flex flex-col'>
        <h3>Return delivery</h3>
        <p className='text-sm'>Free 30 days Delivery Returns</p>
        </div>
      </div>
    </div>
  )
}

export default FreeDeliveryReturnDelivery
