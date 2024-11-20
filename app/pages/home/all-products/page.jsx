"use client"
import React from 'react'
import { productsUrl } from '@/app/lib/constants';
import { useEffect,useState } from 'react';
import ProductCard from '../components/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import Loading from '@/app/components/Loading';
const AllProducts = () => {
    const [AllProducts, setAllProducts] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
       const fetchAllProducts = async ()=>{
        const response = await fetch(productsUrl);
        const data = await response.json();
        setAllProducts(Array.from(data));
        setloading(false)
       }
       fetchAllProducts();
    }, [])
    
  return (
    loading == true ? <div className='absolute top-[50%] left-[50%]' ><Loading/></div> :<div className='grid gap-2 grid-cols-3 2xl:grid-cols-5 py-5' >
      {AllProducts.map((item) => {
          return  <ProductCard key={uuidv4()} item={item} />
        })}
    </div>
  )
}

export default AllProducts
