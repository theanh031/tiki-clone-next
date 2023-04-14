import nowIcon from '@/public/img/tikiNow.png'
import astraIcon from '@/public/img/tikiAstra.png'
import Image from "next/image";
import {useAppDispatch, useAppSelector} from "@/src/components/hook";
import {RootState} from "@/src/store";
import {deleteParam, updateParams} from "@/src/store/reducers/products";
import {useState} from "react";
const Dashboard__service = ({astra, fastDeliver}: any) => {
    const paramUrl = useAppSelector((state: RootState) => state.productReducer.paramUrl)
    const dispatch = useAppDispatch()
    const onChangeInput = (type: string) => {
        if (type === "now"){
            const payload = {
                [fastDeliver.query_name]: fastDeliver.values[0].query_value
            }
            const isCheck = Object.keys(paramUrl).some( (key:any) => key === fastDeliver.query_name)
            if( !isCheck ){
                dispatch(updateParams(payload))
            }else {
                dispatch(deleteParam(payload))
            }

        }
        if (type === "astra") {
            const payload = {
                [astra.query_name]: astra.values[0].query_value
            }
            const isCheck = Object.keys(paramUrl).some( (key:any) => key === astra.query_name)
            if( !isCheck ){
                dispatch(updateParams(payload))
            }else {
                dispatch(deleteParam(payload))
            }

        }
    }
    return (
        <div className=' pb-3 border-t border-solid border-[rgb(235, 235, 240)] overflow-hidden'>
            <h4 className="leading-5 block text-[rgb(56, 56, 61)] py-3 font-medium">Dịch vụ</h4>
            <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-start mr-[2px]">
                <input
                    className='mr-3' id='now__checkbox' type='checkbox' onChange={() => onChangeInput('now')}
                    checked={Object.keys(paramUrl).some( (key:any) => key === fastDeliver.query_name)}/>
                <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
                    <span>
                        <Image className= "h-[10px] w-auto" width='0' height='0' sizes='100vw' src={nowIcon} alt="" />
                    </span>
                    <span>{fastDeliver?.display_name}</span>
                </label>

            </div>
            <div className="text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 flex capitalize no-underline w-full items-start mr-[2px]">
                <input
                    className='mr-3'
                    id='now__checkbox'
                    type='checkbox'
                    checked={Object.keys(paramUrl).some( (key:any) => key === astra.query_name)}
                    onChange={() => onChangeInput('astra')} />
                <label className='flex items-center min-h-[16px] flex-1 flex-wrap gap-1' htmlFor="now__checkbox">
                    <span>
                        <Image width='0' height='0' sizes='100vw' className= "h-[10px] w-auto" src={astraIcon} alt="" />
                    </span>
                    <span>{astra?.display_name}</span>
                </label>

            </div>

        </div>
    )
}

export default Dashboard__service