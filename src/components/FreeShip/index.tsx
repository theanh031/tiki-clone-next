import React from 'react'
import Image from 'next/image'
import freShipLogo from '@/public/img/tiki-freeship-logo.png'
import {MdNavigateNext} from 'react-icons/md'


const Index = () => {
  return (
    <div className='w-full relative z-[1] flex flex-row justify-center items-center py-2 px-4 gap-1 border-[1px] border-solid border-white bg-[#FFE880]'>
      <a className = "flex justify-center items-center "href="">
        <Image alt='' src={freShipLogo} width='0' height='0' sizes = '100vw' className='w-[81px] h-3' />
        <div className='pl-1'>
          <strong className='font-medium'>mọi đơn từ 149K </strong> 
          . Áp dụng cho cả TikiNOW 2h</div>
          <MdNavigateNext className='text-xl text-grayText overflow-clip cursor-pointer' />
      </a>

    </div>
  )
}

export default Index