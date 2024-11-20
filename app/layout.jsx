"use client";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SessionWrapper from "./components/SessionWrapper";np
import { useState } from "react";
export default function RootLayout({ children }) {
  return (
    // <SessionWrapper>
    <html lang="en">
      <body className="flex flex-col min-h-[100vh]">
        <NavBar />
        <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
    // {/* </SessionWrapper> */}
  );
}
