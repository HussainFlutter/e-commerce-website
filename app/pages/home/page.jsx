"use client"
import { productsUrl } from '../../lib/constants'
import React,{useEffect,useState} from 'react'
import CategoriiesAndCarouselSlider from './components/CarouselSlider'
import { giveNineCategories } from '@/app/lib/utils'
import ProductSlider from './components/ProductSlider'
import ViewAllProductsButton from './components/ViewAllProductsButton'
import SpeakerImage from './components/SpeakerImage'

// * Home Screen
const page = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);
  useEffect(() => {
  const fetchData = async ()=>{
    const response = await fetch(productsUrl);
    const data = await response.json();
    const arr =  Array.from(data);
    const discountedProducts =  arr.filter((item)=>item.discount == true)
    const nineCategories = giveNineCategories(arr);
    setProducts(arr);
    setCategories(nineCategories);
    setSaleProducts(discountedProducts);
  }
  fetchData();
  }, [])

  return (
    <>
        {categories.length === 0 ? <div>Loading...</div> : <CategoriiesAndCarouselSlider categories = {categories} />  }
        <ProductSlider saleProducts={saleProducts} title={"Flash Sales"} discount = {true}/>
        <ViewAllProductsButton/>
        <SpeakerImage/>
        <ProductSlider saleProducts={saleProducts} title={"Trending" } />
    </>
  )
}

export default page
