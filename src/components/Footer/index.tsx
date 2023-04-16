import React from 'react'
import About from "@/src/components/Footer/About";
import Address from "@/src/components/Footer/Address";

const Index = () => {
    return (
        <div className='mt-4 text-[14px] leading-[16px] font-normal text-grayText bg-white'>
            <About />
            <Address />
        </div>
    )
}

export default Index