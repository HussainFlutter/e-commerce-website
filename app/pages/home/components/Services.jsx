import React from 'react'
import { services } from '@/app/lib/constants'
import Image from 'next/image'
const Services = () => {
  return (
    <div className='flex justify-evenly py-40 px-10'>
        {services.map((item,index)=>{
            return  <div key={index} className='flex flex-col justify-center items-center'>
                <Image className='pb-4' src={item.icon} alt={index}  width={90} height={100} ></Image>
                <h2 className='font-bold tracking-wider text-xl' >{item.title}</h2>
                <p className='text-gray-600' >{item.desc}</p>
            </div> 
        })}
    </div>
  )
}

export default Services
