"use server"
import { checkoutUrl } from "../lib/constants";
import { redirect } from 'next/navigation'

 export async function placeOrder (billingDetails,totalPrice) {
    const checkOutModel  = {
        ...billingDetails,
        totalPrice,
    }
    
    await fetch(checkoutUrl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(checkOutModel)
    })
     redirect("/pages/home")
 }