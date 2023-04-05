import React from 'react'
import {GrLocation} from 'react-icons/gr'

const SubNav__Location = () => {
  return (
    <div className="flex max-w-xs mt-2 cursor-pointer">
        <a href="" className='flex '>
        <GrLocation className='w-5 h-5 mr-1 text-grayText' />
      <p className= "pr-1 text-grayText">Giao đến:</p>
      <div className='font-medium text-black underline overflow'>Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</div>
        </a>

    </div>
  )
}

export default SubNav__Location