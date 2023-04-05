import Footer from '@/src/components/Footer'
import FreeShip from '@/src/components/FreeShip'
import Header from '@/src/components/Header'
import Main from '@/src/components/Main'
import React from "react";

const Index:React.FC  = () => {
  return (
    <div className='bg-[#efefef]'>
        <Header />
        <FreeShip />
        <Main/>
        <Footer />
    </div>
  )
}

export default Index