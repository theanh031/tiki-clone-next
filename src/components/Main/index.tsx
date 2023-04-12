import React, {useEffect} from 'react'
import MainHeader from './MainHeader'
import MainContainer from './MainContainer'
import {useAppDispatch, useAppSelector} from "@/src/components/hook";
import {RootState} from "@/src/store";
import {getProductList} from "@/src/store/reducers/products";

const Index = () => {
    const dispatch = useAppDispatch()
    const paramUrl = useAppSelector((state:RootState) => state.productReducer.paramUrl)
    const categories = useAppSelector((state:RootState) => state.productReducer.categories)
    const productList = useAppSelector((state:RootState) => state.productReducer.productList)
    useEffect(() => {
            const promise = dispatch(getProductList(paramUrl))
            return () => {
                promise.abort
            }
    },[paramUrl, dispatch])
    return (
        <div>
            <MainHeader categories={categories} />
            <MainContainer/>
        </div>
    )
}

export default Index