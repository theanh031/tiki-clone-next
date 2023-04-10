import {RootState, useAppDispatch} from '@/src/store'
import React, {Fragment, useEffect} from 'react'
import {useSelector} from 'react-redux'
import ProductItem from './ProductItem'
import {useGetProductQuery} from '@/src/service/product.service'
import {getProductList} from '@/src/store/reducers/products'

const Index = () => {
  const productList = useSelector((state: RootState) => state.productReducer.productList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(getProductList())
    return () => {
      promise.abort
    }
  }, [dispatch])
  // const {data, isFetching, isLoading} = useGetProductQuery()
  // console.log(data, isLoading, isFetching)

  return (
      <div className='grid grid-cols-5 grid-rows-8 gap-2'>
        {/* {isFetching && (
        <Fragment>
        </Fragment>
      )}
      {!isFetching && data?.date.map()
      
      } */}

        {productList.map((product: any, index: number) => (
            <ProductItem product={product} key={index}/>
        ))}

      </div>
  )
}

export default Index