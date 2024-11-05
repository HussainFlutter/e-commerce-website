"use client";
import React, { useState } from "react";
import Image from "next/image";
import { redirect, useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";

const Login_Screen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const inputClasses = "px-2 py-3 w-full";
  const router = useRouter()
  const { data: session } = useSession();

useEffect(() => {
  if( session)
    {
      router.replace("/pages/home")
    }
}, [session])

  console.log(session);
  

  return (
    
    <div className="flex items-center py-6 w-full justify-center xl:ml-32 xl:justify-normal">
      <Image alt="shop" src={"/login.png"} width={0} height={0} sizes="1" style={{ width: '40%', height: 'auto' }}></Image>
      <div className="flex flex-col pl-10">
        <h2 className=" font-semibold text-3xl tracking-wider ">Log in to Exclusive</h2>
        <p className="py-3">Enter your details below</p>
        <form className="flex flex-col">
          <div className="w-72">
            <input
              className={inputClasses}
              type="text"
              name="email"
              placeholder="Email"
            />
            <div className="w-full h-[1px] bg-black"></div>
          </div>

          <div className="w-72">
            <input
              className={inputClasses}
              type="text"
              name="password"
              placeholder="Password"
            />
            <div className="w-full h-[1px] bg-black"></div>
          </div>
        </form>
        <div className="flex justify-between py-5">
          <button className="bg-red-400 px-6 py-3 text-white rounded-sm" onClick={async ()=>{
            await signIn("google").then(()=>{
              redirect("/home")
            });
          }} >
             Login with google
          </button>
          <button onClick={async ()=>{
            await signOut();
          }} className="text-red-400">Forget Password?</button>
        </div>
        <div>
          Don't have an account?{" "}
          <button className="text-red-400 underline" onClick={()=>router.push('/signup')}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login_Screen;
