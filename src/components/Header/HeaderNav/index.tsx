import React from 'react'
import HeaderNavLeft from '@/src/components/Header/HeaderNav/HeaderNavLeft'
import HeaderNavRight from './HeaderNavRight'

const Index = () => {
  return (
    <div className='flex h-auto relative z-[2] items-center'>
        <HeaderNavLeft />
        <HeaderNavRight />
    </div>
  )
}

export default Index