import React from 'react'
import Image from 'next/image'
import nextIcon from '@/public/img/categoryNext__icon.png'

const Index = () => {
    return (
        <div className='bg-white'>
            <div className='pt-4 pl-4'>
                <h1 className='inline font-normal text-hover__text text-xl '>Thời trang nam</h1>
            </div>
            <div className='px-[15px] mt-3'>
                <div>
                    <div className='flex justify-between mt-3'>
                        <div className='mr-[10px]'>
                            <ul className='flex'>
                                <li className='font-normal relative cursor-pointer text-sm px-4 py-3'><a href="">Phổ biến</a></li>
                                <li className='font-normal relative cursor-pointer text-sm px-4 py-3'><a href="">Bán chạy</a></li>
                                <li className='font-normal relative cursor-pointer text-sm px-4 py-3'><a href="">Hàng Mới</a></li>
                                <li className='font-normal relative cursor-pointer text-sm px-4 py-3'><a href="">Giá Thấp đến cao</a></li>
                                <li className='font-normal relative cursor-pointer text-sm px-4 py-3'><a href="">Giá cao đến thấp</a></li>
                            </ul>
                        </div>
                        <div className='flex'>
                            <div className='flex '>
                                <span>1</span>
                                <span>/</span>
                                <span>50</span>
                            </div>
                            <div className='flex'>
                                <a href="">
                                    <span>{"<"}</span>
                                </a>
                                <a href="">
                                    <span>{">"}</span>

                                </a>

                            </div>
                        </div>

                    </div>

                    <div>

                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Index