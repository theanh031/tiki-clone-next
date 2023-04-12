import {RootState} from '@/src/store'
import React, { useEffect} from 'react'
import ProductItem from './ProductItem'
import {getProductList} from '@/src/store/reducers/products'
import {useAppDispatch, useAppSelector} from "@/src/components/hook";
const Index = () => {
    const productList = useAppSelector((state: RootState) => state.productReducer.productList).data
    return (
        <div className='grid grid-cols-5 grid-rows-8 gap-2'>
            {productList &&productList.map((product: any, index: number) => (
                <ProductItem product={product} key={index}/>
            ))}
        </div>
    )
}

export default Index