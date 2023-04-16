import React, {useEffect} from 'react'
import Dashboard__block from './Dashboard__block'
import Dashboard__location from './Dashboard__location'
import Dashboard__service from './Dashboard__service'
import Dashboard__rate from './Dashboard__rate'
import Dashboard__price from './Dashboard__price'
import Dashboard__props from './Dashboard__props'
import {RootState} from '@/src/store'
import { useAppSelector} from "@/src/components/hook";
const Index = () => {
    const dashboardList = useAppSelector( (state : RootState) => state.productReducer.productList).filters
    const dashboardType = (key: string) => {
        return dashboardList && dashboardList.find((item: any) => item.query_name === key)
    }
    return (
        <div className='w-[200px] px-4 bg-white overflow-hidden'>
            <Dashboard__block category={dashboardType('category')}/>
            <Dashboard__location/>
            <Dashboard__service fastDeliver = {dashboardType('support_p2h_delivery')} astra = {dashboardType('seller_asa_cashback')} />
            <Dashboard__rate rating={dashboardType('rating')}/>
            <Dashboard__price price = {dashboardType('price')}/>
            <Dashboard__props props = {dashboardType('brand')}/>
            <Dashboard__props props = {dashboardType('cloth_material')}/>
            <Dashboard__props props = {dashboardType('fashion_pattern')}/>
            <Dashboard__props props = {dashboardType('shirt_style')}/>
            <Dashboard__props props = {dashboardType('option_color')}/>
            <Dashboard__props props = {dashboardType('option_size_clothes')}/>
            <Dashboard__props props = {dashboardType('seller')}/>

        </div>
    )
}

export default Index