"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { useSession } from "next-auth/react"
//! Implement next auth
// TODO: Set the hrefs
const NavBar = () => {
  // const { data: session } = useSession();
  return (
    <>
      <div className="flex justify-between my-5 mx-5 items-center lg:mx-24">
        <h2 className="font-bold text-2xl">Exclusive</h2>
        <div>
          <ul className="flex gap-8 text-xl">
            <li>
              <Link href={"/pages/home"}>Home</Link>
            </li>
            <li>
              <Link href={""}>About</Link>
            </li>
            <li>
              <Link href={""}>Contact</Link>
            </li>
            {/* {{session} ? <dir></dir> : (<li> */}
            <li>
              <Link href={"/signup"}>Sign Up</Link>
            </li>

            {/* </li> )} */}
          </ul>
        </div>
        <div className="bg-gray-200 py-3 px-5 rounded-md flex gap-2">
          <input
            className="bg-transparent focus:outline-none "
            type="text"
            name=""
            id=""
            placeholder="What are you looking for?"
          />
          <img src="/search.svg" alt="see" />
        </div>
        <Link href={"/pages/home/cart"}>
          <Image src="/cart.svg" alt="cart" width={24} height={24}></Image>
        </Link>
      </div>
      {/* <div className="w-full h-[1px] bg-black"></div>
       */}
      <hr />
    </>
  );
};

export default NavBar;
