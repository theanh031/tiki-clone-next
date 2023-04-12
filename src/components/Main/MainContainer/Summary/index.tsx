import React from 'react'
import {useAppSelector} from "@/src/components/hook";
import {RootState} from "@/src/store";
import {GrNext} from "react-icons/gr";
import Image from "next/image";
import tikiNow from "@/public/img/tikiNow.png"
import tikiAstra from "@/public/img/tikiAstra.png"
import {MdCancel} from "react-icons/md";

const Index = () => {
    const sortOptions = useAppSelector((state: RootState) => state.productReducer.productList).sort_options
    const filterList = useAppSelector((state: RootState) => state.productReducer.filterList)
    return (
        <div className='bg-white'>
            <div className='pt-3 pl-4'>
                <h1 className='inline font-normal text-[#38383d] text-xl '>Thời trang nam</h1>
            </div>
            <div className=' clear-both'>
                <div>
                    <div className='flex justify-between border-b border-solid border-[#f2f2f2] pt-3'>
                        <div className='mr-[10px] inline-block list-none'>
                            <ul className='flex'>
                                {sortOptions && sortOptions.map( (sort: any, index: any) => (
                                    <li key={index} className='capitalize inline-block font-normal relative cursor-pointer text-sm px-4 py-3'><a href="">{sort.display_value}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className='flex h-[36px] mt-1 mr-4 mb-2'>
                            <div className='flex items-center gap-[5px]'>
                                <span className='text-primary'>1</span>
                                <span>/</span>
                                <span>50</span>
                            </div>
                            <div className='flex gap-0 ml-3 items-center'>
                                <a className='w-[36px] h-[36px] flex items-center justify-center'>
                                    <GrNext className='rotate-180  max-w-full' />
                                </a>
                                <a className='w-[36px] h-[36px] flex items-center justify-center'>
                                    <GrNext />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className='flex py-3 pr-4 pl-[15px]'>
                        <div className= 'flex'>
                            <p className='bg-[#eeeeee] cursor-pointer border-transparent text-primary w-[78px] flex justify-center items-center mr-[10px] px-3 py-[10px] relative rounded-[100px] h-[32px]' >
                                <Image src={tikiNow} width={'0'} height={'0'} sizes='100wh' alt='Giao siêu tốc 2H' className='max-h-[12px] max-w-full w-auto'/>
                            </p>
                            <p className='bg-[#eeeeee] cursor-pointer border-transparent text-primary w-[78px] flex justify-center items-center mr-[10px] px-3 py-[10px] relative rounded-[100px] h-[32px]' >
                                <Image src={tikiAstra} width={'0'} height={'0'} sizes='100wh' alt='Giao siêu tốc 2H' className='max-h-[12px] max-w-full w-auto'/>
                            </p>
                        </div>
                        {filterList && filterList.map( (filter:any, index : any) => (
                            <p key={index} className='bg-[#f0f8ff] text-[#0b74e5] border-solid border mr-[10px] border-[#1a94ff] text-[13px] px-[10px] py-3 rounded-[100px] flex items-center  mr-{10px] h-[32px] relative font-normal cursor-pointer'>
                                <a>{filter}</a>
                                <a className='flex'>
                                    <MdCancel className='ml-[11px] text-[20px]' />
                                </a>
                            </p>
                        ))}
                        <p className=' text-[#0b74e5]  mr-[10px] font-extrabold text-[13px] px-[10px] py-3 rounded-[100px] flex items-center  mr-{10px] h-[32px] relative font-normal cursor-pointer' >
                            <a>Xóa tất cả</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index