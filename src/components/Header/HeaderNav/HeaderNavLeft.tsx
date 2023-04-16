import React from 'react'
import Image from 'next/image'
import tikiLogo from '@/public/img/tiki-logo.png'
import {HiOutlineSearch} from 'react-icons/hi'

const HeaderNavLeft = () => {
    return (
        <div className='flex flex-1 items-center'>
            <div className='flex items-start shrink-0 mr-12 basis-[unset]'>
                <Image src={tikiLogo} alt="" width='0' height='0' sizes='100vw' className='w-[57px] h-[40px]'/>
            </div>
            <div className='flex flex-1 w-full relative border border-solid border-grayBorder rounded-lg items-center'>
                <HiOutlineSearch className='w-5 h-5 ml-[18px] max-w-full text-grayText'/>
                <input type='text' placeholder='Bạn tìm gì hôm nay ?' className='border-0 px-2 font-normal leading-[150%] rounded-l-lg  flex-1 outline-none overflow-visible border-r border-grayBorder '/>
                <button className="btn w-[92px] h-[38px] text-primary p-1 hover:bg-[#0a68ff33] rounded-l-none">Tìm
                    kiếm
                </button>
            </div>

        </div>
    )
}

export default HeaderNavLeft