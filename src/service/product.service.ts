import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl:'//tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&trackity_id=cca3c480-6967-8e46-2521-43ed98bd7472&category=915&page=2&urlKey=thoi-trang-nam' }),
    endpoints: build => ({
        getProduct: build.query<any,void>({
            query: () => ''
        })
    })
})

export const {useGetProductQuery} = productApi