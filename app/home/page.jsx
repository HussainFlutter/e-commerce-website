"use client"
import { productsUrl } from '../lib/constants'
import React,{useEffect,useState} from 'react'
// * Home Screen
const page = () => {
  useEffect(() => {
  const fetchData = async ()=>{
    const response = await fetch(productsUrl);
    const data = await response.json();
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  }
  fetchData();
  }, [])
  return (
    <div>
      Home Screen
    </div>
  )
}

export default page
