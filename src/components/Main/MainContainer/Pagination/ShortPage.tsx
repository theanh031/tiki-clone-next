import React from 'react';
import {useAppDispatch, useAppSelector} from "@/src/components/hook";
import {RootState} from "@/src/store";
import {BsThreeDots} from "react-icons/bs";
import {updateParams} from "@/src/store/reducers/products";

const ShortPage = () => {
    const page = useAppSelector( (state : RootState) => state.productReducer.productList).paging
    const dispatch = useAppDispatch()

    const handleClick = (item: any) => {
        const payload = {
            page: item
        }
        dispatch(updateParams(payload))
    }
    const handleShort = () => {
        let pageList: number[] = []
        if(page.current_page < 5) {
            pageList = []
            for (let i  = 1; i <= 5; i++) {
                pageList = [...pageList, i]
            }
        }
        if(page.current_page > 45) {
            pageList = []
            for (let i = 45; i < 50; i++) {
                pageList = [...pageList, i]
            }
        }
        return pageList
    }
    return (
        <div className='flex gap-[16px]'>

            {page.current_page > 45 ? (
                <li>
                    <a className='hover:bg-[#c1e7ff] cursor-pointer items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center' onClick={() => handleClick(1)}>
                        1
                    </a>
                </li>
            ) : ''}
            {page.current_page > 45 ? (
                <li>
                    <a className=' items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center opacity-40'>
                        <BsThreeDots />
                    </a>
                </li>
            ): ''}
            {handleShort().map( (item: any) => (
                <li key={item} >
                    <a className={`${item === page.current_page ? 'bg-[#0b74e5] text-[#fff]' : ''} hover:bg-[#c1e7ff] cursor-pointer items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center`} onClick={() => handleClick(item)}>{item}</a>
                </li>
            ))}
            {page.current_page < 5 ? (
                <li>
                    <a className=' items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center opacity-40'>
                        <BsThreeDots />
                    </a>
                </li>
            ): ''}

            {page.current_page < 5 ? (
                <li>
                    <a className='hover:bg-[#c1e7ff] cursor-pointer items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center' onClick={() => handleClick(50)}>
                        50
                    </a>
                </li>
            ) : ''}



        </div>
    );
};

export default ShortPage;
