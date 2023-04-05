import React from 'react'
import Dashboard from './Dashboard'
import Summary from './Summary'
import Product__list from './Product__list'

const Index = () => {
  return (
    <div className='flex justify-between w-[1270px] px-[15px] mx-auto'>
        <Dashboard />
        <div className='w-categoryWidth'>
        <Summary />
        <Product__list /> 
        </div>
    </div>
  )
}

export default Index