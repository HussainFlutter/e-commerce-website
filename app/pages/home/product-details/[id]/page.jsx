"use client"
import React , {useEffect,useState} from 'react'
 import { productsUrl } from '@/app/lib/constants'
 import { useParams } from 'next/navigation'
 import ProductImages from '../components/ProductImages'
 import ProductDetails from '../components/ProductDetails'
const page = () => {
  const params = useParams()
const [product, setProduct] = useState(null)
  useEffect(() => {
    const getSingleProduct = async ()=>{
      const id = params.id;
      const response = await fetch(`${productsUrl}/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    getSingleProduct()
  }, [])

  return (<>
  {product == null ? <div></div> 
  : <div className='flex' >
    <ProductImages images= {product.image} />
    <ProductDetails product={product} />
  </div> }
  </>);
  
}

export default page