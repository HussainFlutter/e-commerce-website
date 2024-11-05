"use client"
import { productsUrl } from '../../lib/constants'
import React,{useEffect,useState} from 'react'
import CategoriiesAndCarouselSlider from './components/CarouselSlider'
import { giveNineCategories } from '@/app/lib/utils'
// * Home Screen
const page = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
  const fetchData = async ()=>{
    const response = await fetch(productsUrl);
    const data = await response.json();
    const arr =  Array.from(data);
    const nineCategories = giveNineCategories(arr);
    setCategories(nineCategories);
  
  }
  fetchData();
  }, [])

  return (
    <div>
        {categories.length === 0 ? <div>Loading...</div> : <CategoriiesAndCarouselSlider categories = {categories} />  }
    </div>
  )
}

export default page
