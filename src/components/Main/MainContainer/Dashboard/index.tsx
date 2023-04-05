import React, { useEffect } from 'react'
import Dashboard__block from './Dashboard__block'
import Dashboard__location from './Dashboard__location'
import Dashboard__service from './Dashboard__service'
import Dashboard__rate from './Dashboard__rate'
import Dashboard__price from './Dashboard__price'
import Dashboard__brand from './Dashboard__brand'
import Dashboard__fabric from './Dashboard__fabric'
import Dashboard__pattern from './Dashboard__pattern'
import Dashboard__design from './Dashboard__design'
import Dashboard__color from './Dashboard__color'
import Dashboard__size from './Dashboard__size'
import Dashboard__supplier from './Dashboard__supplier'
import Dashboard__shipping from './Dashboard__shipping'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/src/store'
import { getProductList } from '@/src/store/reducers/products'

const Index = () => {
  const dashboardList = useSelector( (state: RootState) => state.productReducer.dashboards)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const promise = dispatch(getProductList())
    return () => {
      promise.abort
    }
  }, [dispatch])

  const dashboardType = (key: string) => {
    return dashboardList.find((item:any) => item.query_name === key)
  }
  
  return (
    <div className='auto-cols-max w-[200px] px-4 bg-white'>
        <Dashboard__block category={dashboardType('category')}/>
        <Dashboard__location />
        <Dashboard__service />
        <Dashboard__rate />
        <Dashboard__price />
        <Dashboard__brand />
        <Dashboard__fabric />
        <Dashboard__pattern />
        <Dashboard__design />
        <Dashboard__color />
        <Dashboard__size />
        <Dashboard__supplier />
        <Dashboard__shipping />

    </div>
  )
}

export default Index