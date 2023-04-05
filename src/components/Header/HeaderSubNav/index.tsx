import React from 'react'
import SubNav__QuickLink from './SubNav__QuickLink'
import SubNav__Location from './SubNav__Location'

const Index = () => {
  return (
    <div className='flex justify-between relative'>
      <SubNav__QuickLink />
      <SubNav__Location />
    </div>
  )
}

export default Index