import React from 'react'
import {MdNavigateNext} from 'react-icons/md'

const MainHeader = () => {
  return (
    <div className='w-[1270px] px-[15px] mx-auto'>
        <div className = "flex item-center">
            <a className = "relative flex justify-center items-center cursor-pointer h-10 text-[rgb(128, 128, 137)] leading-5 font-light whitespace-normal hover:underline hover:text-hover__text" href="">
                <span>Trang chủ</span>
            </a>
            <div className = "flex items-center ">
                <MdNavigateNext className='text-xl text-grayText overflow-clip cursor-pointer' />

            </div>
            <a className = "flex items-center text-[rgb(56, 56, 61)] relative h-10 leading-5 font-normal whitespace-nowrap"href="">
                <span>Thời trang nam</span>
            </a>
        </div>
    </div>
  )
}

export default MainHeader