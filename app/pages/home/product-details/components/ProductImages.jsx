import React from 'react'

const ProductImages = ({images}) => {
  
  return (
    <div className='flex gap-2'>
      <div className='flex flex-col justify-between' >
      <img src={images} alt="" width={120}/> 
      <img src={images} alt="" width={120}/> 
      <img src={images} alt="" width={120}/> 
      <img src={images} alt="" width={120}/> 
      </div>
      <img src={images} alt="" width={500}/> 
    </div>
  )
}

export default ProductImages
