import React from 'react';
import {useAppDispatch, useAppSelector} from "@/src/components/hook";
import {RootState} from "@/src/store";
import {BsThreeDots} from "react-icons/bs";
import {updateParams} from "@/src/store/reducers/products";

const LongPage = () => {
    const page = useAppSelector( (state : RootState) => state.productReducer.productList).paging
    const dispatch = useAppDispatch()
    const handleClick = (item: any) => {
        const payload = {
            page: item
        }
        dispatch(updateParams(payload))
    }
    const handleLong = () => {
        let pageList: number[] = [];
        const currentPage =  page?.current_page
        for (let i = currentPage - 2; i < currentPage + 3; i++ ) {
            pageList = [...pageList, i]
        }
        return pageList
    }
    return (
        <div className='flex gap-[16px]'>
            <li>
                <a className='hover:bg-[#c1e7ff] cursor-pointer items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center' onClick={() => handleClick(1)}>
                    1
                </a>
            </li>
            <li>
                <a className=' items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center opacity-40'>
                    <BsThreeDots />
                </a>
            </li>
            {handleLong().map( (item: any) => (
                <li key={item} >
                    <a className={`${item === page.current_page ? 'bg-[#0b74e5] text-[#fff]' : ''} hover:bg-[#c1e7ff] cursor-pointer items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center`} onClick={() => handleClick(item)}>{item}</a>
                </li>
            ))}
            <li>
                <a className=' items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center opacity-40'>
                    <BsThreeDots />
                </a>
            </li>
            <li>
                <a className='hover:bg-[#c1e7ff] cursor-pointer items-center font-normal text-[16px] leading-[36px] text-[#808089] rounded-[4px] w-[40px] h-[36px] text-center flex justify-center' onClick={() => handleClick(50)}>
                    50
                </a>
            </li>
        </div>
    );
};

export default LongPage;
