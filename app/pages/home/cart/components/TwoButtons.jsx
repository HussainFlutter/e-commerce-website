import React from 'react'

const buttonStyle = "border border-black p-2";

const TwoButtons = () => {
  return (
    <div className='flex justify-between p-4'>
        <button className={buttonStyle}>Return To Shop</button>
        <button className={buttonStyle}>Update Cart</button>
    </div>
  )
}

export default TwoButtons
    