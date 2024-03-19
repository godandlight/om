import React from 'react'
import Navbar from "./header/Header"
import Main from "./header/Main"
import Footer from "./header/Footer"

export default function Landing() {
  return (
    <>
<div style={{ overflow: 'hidden' }}>
        <Navbar/>
        <Main/>
        <Footer/>
        </div>
    </>
  )
}
