import React from "react";
import Image from "next/image";
const Footer = () => {

  return <footer className="bg-black w-full bottom-0 pt-8  ">
   <div className="h-2/5 px-20 py-10 flex justify-between">
   <div className="text-white flex flex-col gap-3 ">
    <h2 className="font-bold text-xl" >Exclusive</h2>
    <ul className="flex flex-col gap-3">
      <li className="font-bold" >Subscribe</li>
      <li>Get 10% off your first order</li>
      <li>
      <div className="py-3 px-5 rounded-md flex gap-2 border-white border-2 w-fit">
    <input className="bg-black focus:outline-none " type="text" name="" id="" placeholder="What are you looking for?" />
    <Image src={"/send.svg"} width={25} height={25} alt="send"></Image>
    </div>
      </li>
    </ul>
  </div>
  {/*  */}
  <div className="text-white flex flex-col gap-3 ">
    <h2 className="font-bold text-xl" >Support</h2>
    <ul className="flex flex-col gap-3">
      <li>Your Address</li>
      <li>Your email</li>
      <li>Your Phone number</li>
    </ul>
  </div>
  {/*  */}
  <div className="text-white flex flex-col gap-3 ">
    <h2 className="font-bold text-xl" >Account</h2>
    <ul className="flex flex-col gap-3">
      <li >My Account</li>
      <li>Login / Register</li>
      <li>Cart</li>
      <li>Wishlist</li>
      <li>Shop</li>
    </ul>
  </div>
  {/*  */}
  <div className="text-white flex flex-col gap-3 ">
    <h2 className="font-bold text-xl" >Quick Link</h2>
    <ul className="flex flex-col gap-3">
      <li>Privacy Policy</li>
      <li>Terms Of Use</li>
      <li>FAQ</li>
      <li>Contact</li>
    </ul>
  </div>
  </div>
  <div className="text-gray-400 items-center flex flex-col py-2">
    <div className="w-full h-[1px] bg-gray-700" ></div>
  Copyright Rimel 2022. All right reserved
  </div>
  </footer>
 
};

export default Footer;
