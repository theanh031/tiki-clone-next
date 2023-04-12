import React, {useRef, useState} from 'react'
import {useAppDispatch} from "@/src/components/hook";
import {updateDashboard} from "@/src/store/reducers/products";

const Dashboard__price = ({price} : any) => {
    const [priceValue, setPriceValue] = useState({
        min: '',
        max: ''
    });
    const dispatch = useAppDispatch()
    const handleChangeMin = (event: any) => {
        event.preventDefault()
        let min = { min: event.target.value}
        setPriceValue({
        ...priceValue,
        ...min
        })
    }
    const handleChangeMax = (event: any) => {
        event.preventDefault()
        let max = {max: event.target.value}
        setPriceValue({
            ...priceValue,
            ...max
        })
    }
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const price = priceValue.min + ',' + priceValue.max
        const payload = {
            price: price,
        }
        dispatch(updateDashboard(payload))
        setPriceValue({
            min: '0',
            max: '0',
        })

    }
    const handleClick = (value: any) => {
        console.log(value.query_value)
        const payload = {
            price: value.query_value
        }
        dispatch(updateDashboard(payload))
    }
    return (
        <div className=' pb-3 border-t border-solid border-[rgb(235, 235, 240)] overflow-hidden'>
            <h4 className="leading-5 block text-[rgb(56, 56, 61)] py-3 font-medium">{price && price.display_name}</h4>
            {price && price.values.map( (val: any, i: any) => (
                <div className='cursor-pointer' key={i} onClick={() => handleClick(val)} >
                    <span className='bg-[#eeeeee] text-xs py-1 px-3 inline-block relative text-[#38383d] rounded-xl mb-1'>{val.display_value}</span>
                </div>
            ))}

            <div className='text-my__gray1 text-xs mt-1 pb-2'>
                Chọn khoảng giá
            </div>

            <div className='flex items-center'>
                <input
                    className='flex-1 w-[77px] h-[30px] px-2 bg-white rounded text-left border border-solid border-[#b8b8b8] outline-none text-[13px]'
                    pattern='[0-9]*' placeholder='Giá từ' onChange={(e) => handleChangeMin(e)} value={priceValue.min}/>
                <span className='w-[7px] h-[1px] text-[0] inline-block bg-[#9a9a9a] mx-1 align-middle'> - </span>
                <input
                    className='flex-1 w-[77px] h-[30px] px-2 bg-white rounded text-left border border-solid border-[#b8b8b8] outline-none text-[13px]'
                    pattern='[0-9]*' placeholder='Giá đến' onChange={(e) => handleChangeMax(e)} value={priceValue.max}/>
            </div>
            <button
                className='bg-white border border-solid border-[#0b74e5] text-xs text-[#0b74e5] py-[5px] px-[15px] w-full mt-2 rounded'
                onClick={(e) => handleSubmit(e)}
            >Áp dụng
            </button>


        </div>
    )
}

export default Dashboard__price