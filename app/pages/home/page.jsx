"use client"
import { productsUrl } from '../../lib/constants'
import React,{useEffect,useState} from 'react'
import CategoriiesAndCarouselSlider from './components/CarouselSlider'
import { giveNineCategories } from '@/app/lib/utils'
import ProductSlider from './components/ProductSlider'
import ViewAllProductsButton from './components/ViewAllProductsButton'
import SpeakerImage from './components/SpeakerImage'
import Services from './components/Services'

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
  const fetchData = async ()=>{
    const response = await fetch(productsUrl);
    const data = await response.json();
    const arr =  Array.from(data);

    const discountedProducts =  arr.filter((item)=>item.discount == true)
    const trendingProducts = arr.filter((item)=>item.trending == true)
    const nineCategories = giveNineCategories(arr);


    setProducts(arr);
    setCategories(nineCategories);
    setTrendingProducts(trendingProducts)
    setSaleProducts(discountedProducts);
  }
  fetchData();
  }, [])

  return (
    <>
        {categories.length === 0 ? <div>Loading...</div> : <CategoriiesAndCarouselSlider categories = {categories} />  }
        <ProductSlider products={saleProducts} title={"Flash Sales"}/>
        <ViewAllProductsButton/>
        <SpeakerImage/>
        <ProductSlider products={trendingProducts} title={"Trending" } />
        <Services/>
    </>
  )
}

export default HomeScreen
