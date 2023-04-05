import http from "@/src/utils/http";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ProductState {
    productList: any
    dashboards:any
}

const initialState: ProductState = {
    productList: [],
    dashboards: [],
}

export const getProductList = createAsyncThunk(
    'product/getProductList',
    async (_, thunkAPI) => {
        const res = await http.get<any>('', {
            signal: thunkAPI.signal
        })
        return res.data
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // action
        
    },
    extraReducers(builder) {
        builder
            .addCase(getProductList.fulfilled, (state, action) => {
                state.productList = action.payload.data
                state.dashboards = action.payload.filters
            })
    }
}
)

const productReducer = productSlice.reducer
export default productReducer