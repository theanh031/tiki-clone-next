import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://tiki.vn/api/personalish/v1/blocks/' }),
    endpoints: build => ({
        getProduct: build.query<any,any>({
            query: ({option}) => `listings?limit=${option.limit}&include=${option.include}&aggregate=${option.aggregate}&trackity_id=${option.trackity_id}&category=${option.category}&page=${option.page}&urlKey=${option.urlKey}`
        })
    })
})

export const {useGetProductQuery} = productApi