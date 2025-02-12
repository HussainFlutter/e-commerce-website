"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Separator from "@/app/components/Separator";
// import { useRouter } from 'next/navigation'
// import { useSession } from "next-auth/react"
const SignUp_Screen = () => {
  const inputClasses = "px-2 py-3 w-full";
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const router = useRouter()
  // const { data: session } = useSession();

  // useEffect(() => {
  //   if(session)
  //     {
  //       router.replace("/home")
  //     }
  // }, [session])

  return (
    <div className="flex items-center py-6 w-full justify-center xl:pl-32 xl:justify-normal">
      <Image
        alt="shop"
        src={"/login.png"}
        width={0}
        height={0}
        sizes="1"
        style={{ width: "40%", height: "auto" }}
      ></Image>
      <div className="flex flex-col pl-10">
        <h2 className=" font-semibold text-3xl tracking-wider ">
          Create an account
        </h2>
        <p className="py-3">Enter your details below</p>
        <form className="flex flex-col">
          <div className="w-72">
            <input
              className={inputClasses}
              type="text"
              name="name"
              placeholder="Name"
            />
            <Separator />
          </div>
          <div className="w-72">
            <input
              className={inputClasses}
              type="text"
              name="email"
              placeholder="Email"
            />
            <Separator />
          </div>

          <div className="w-72">
            <input
              className={inputClasses}
              type="text"
              name="password"
              placeholder="Password"
            />
            <Separator />
          </div>
        </form>
        <div className="flex py-5 flex-col gap-3">
          <button className="bg-red-400 p-3 text-white rounded-sm w-full">
            Create Account
          </button>
          <button className="flex bg-transparent p-3 rounded-sm w-full border border-gray-300 items-center gap-3 justify-center">
            <Image
              alt="google"
              src={"/google.png"}
              width={20}
              height={20}
            ></Image>{" "}
            Sign up with Google
          </button>
        </div>
        <div className="flex gap-2">
          Already have an account?
          <button
            className="text-red-400 underline"
            onClick={() => router.replace("/login")}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp_Screen;
