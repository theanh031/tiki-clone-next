import React from 'react'
import {HandleRate} from "@/src/components/helpler";
import {useAppDispatch} from "@/src/components/hook";
import {updateDashboard} from "@/src/store/reducers/products";

const Dashboard__rate = ({rating}: any) => {
    const dispatch = useAppDispatch()
    const handleClick = (item: any) => {
        const payload ={
            rating: item.query_value
        }
        dispatch(updateDashboard(payload))
    }
    return (
        <div className=' pb-3 border-t border-solid border-[rgb(235, 235, 240)] overflow-hidden'>
            <h4 className="leading-5 block text-[rgb(56, 56, 61)] py-3 font-medium">{rating && rating.display_name}</h4>
            {rating && rating.values.map((value: any, index: number) => (
                <div key={index}>
                    <a className="cursor-pointer pt-[5px] flex items-center text-xs" onClick={() => handleClick(value)}>
                        <HandleRate num = {value.query_value} />
                        <span className='ml-[3px] font-normal'>{value.display_value}</span>
                    </a>
                </div>
            ))}


        </div>
    )
}

export default Dashboard__rate