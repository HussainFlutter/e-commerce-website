import React from 'react'
import Loading from './components/Loading'
const loading = () => {
  return (
    <div className='absolute h-full w-full top-[30%] left-[50%]' >
      <Loading/>
    </div>
  )
}

export default loading
