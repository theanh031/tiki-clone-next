import React from 'react'
import {MdNavigateNext} from 'react-icons/md'
import {useAppDispatch} from "@/src/components/hook";
import { updateDashboard} from "@/src/store/reducers/products";
interface CategoryProps {
    categories: any
}
const MainHeader = ({categories}: CategoryProps) => {
    const dispatch = useAppDispatch()
    const handleClick = (category:any) => {
        dispatch(updateDashboard(category))

    }
    return (
        <div className='w-[1270px] px-[15px] mx-auto'>
            <div className = "flex item-center">
                <a className = "relative flex justify-center items-center cursor-pointer h-10 text-[rgb(128, 128, 137)] leading-5 font-light whitespace-normal hover:underline hover:text-hover__text" href="">
                    <span>Trang chủ</span>
                </a>
                {categories && categories.map((category: any, index: number) => (
                    <div key={index} className='flex'>
                        <div className = "flex items-center ">
                            <MdNavigateNext className='text-xl text-grayText overflow-clip cursor-pointer' />
                        </div>
                        <a
                            className = "flex items-center text-[rgb(56, 56, 61)] relative h-10 leading-5 font-normal whitespace-nowrap"
                            onClick={() => handleClick(category)} >
                            <span>{category.display_value}</span>
                        </a>
                    </div>

                ))}



            </div>
        </div>
    )
}

export default MainHeader