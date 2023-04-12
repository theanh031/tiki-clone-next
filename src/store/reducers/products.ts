import http from "@/src/utils/http";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ParamType} from "@/src/types/param.type";
interface ProductState {
    productList: any
    paramUrl: any
    categories: any
}
const initialState: ProductState = {
    productList: [],
    paramUrl: {
        limit: 40,
        include: "advertisement",
        aggregations: 2,
        trackity_id: "cca3c480-6967-8e46-2521-43ed98bd7472",
        category: 915,
        page: 1,
        urlKey: "thoi-trang-nam"
    },
    categories: [{
        display_value: "Thời trang nam",
        url_key:'thoi-trang-nam',
        query_value:'915',
    }]
}
export const getProductList = createAsyncThunk(
    'product/getProductList',
    async (param:object, thunkAPI) => {
        const res = await http.get<any>('/listings', {
            signal: thunkAPI.signal,
            params: param
        })
        return res.data
    }
)
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateDashboard: (state, action:PayloadAction<any>) => {
            const payload = action.payload
            state.paramUrl = {
                ...state.paramUrl,
                ...payload
            }

        },
        deleteDashboard: (state, action:PayloadAction<any>) => {

        }
    },
    extraReducers(builder) {
        builder
            .addCase(getProductList.fulfilled, (state, action) => {
                state.productList = action.payload
            })
    }
}
)

export const {updateDashboard, deleteDashboard} = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer