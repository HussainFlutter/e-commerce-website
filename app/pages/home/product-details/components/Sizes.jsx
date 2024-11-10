import React from 'react'

const Sizes = ({sizes}) => {
  return (
    <div className='flex flex-wrap mr-2 justify-center mt-3 items-center gap-3' >
      <p className='font-semibold tracking-wide' >Size:</p>
        {sizes.map((size,index)=>{
            return <label className='sizeSpan' key={index}>
			<input type="radio" name="size" value={size} className='CustomSizeRadio'/>
			<span className='sizeSpan' >{size}</span>
		</label>
        })}
	</div>
  )
}

export default Sizes
