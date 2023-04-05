import { ProductUrlState } from '@/src/types/param.type';
import { createSlice } from "@reduxjs/toolkit";

interface ParamUrlState {
    productUrl: ProductUrlState,
}


const initialState: ParamUrlState = {
    productUrl: {
        limit: 40,
        include: "advertisement",
        aggregations: 2,
        trackity_id: "cca3c480-6967-8e46-2521-43ed98bd7472",
        category: 915,
        page: 1,
        urlKey: "thoi-trang-nam"
    }
}

const paramUrlSlice = createSlice({
    name: 'productUrl',
    initialState,
    reducers: {
        
    }
})

const paramUrlReducer = paramUrlSlice.reducer
export default paramUrlReducer