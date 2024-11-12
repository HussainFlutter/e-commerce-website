import React from 'react'
import CustomButton from '@/app/components/CustomButton'
const Coupon = () => {
  return (
    <div className='flex gap-2 size-fit'>
      <input type="text" className='border border-black px-4 py-2' placeholder='Coupon Code'/>
      <CustomButton title={"Apply Coupon"} />
    </div>
  )
}

export default Coupon
