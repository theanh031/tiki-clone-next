import React from 'react'
import HeaderNav from './HeaderNav'
import HeaderSubNav from './HeaderSubNav'

const Index: React.FC = () => {
    return (
        <div className='bg-white'>
            <div className='relative bg-white py-2  w-[1440px] px-6 mx-auto'>
                <HeaderNav/>
                <HeaderSubNav/>
            </div>

        </div>
    )
}

export default Index