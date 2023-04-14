import http from "@/src/utils/http";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {paramUrl} from "@/src/utils/constants";
interface ProductState {
    filterList: any[]
    productList: any
    paramUrl: any
    categories: any
}
const initialState: ProductState = {
    filterList: [],
    productList: [],
    paramUrl,
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
        updateParams: (state, action:PayloadAction<any>) => {
            let payload = action.payload
            if(payload.hasOwnProperty('displayName')){
                state.filterList.push(payload)
                const {displayName, ...newPayload} = payload
                payload = newPayload
            }
            state.paramUrl = {
                ...state.paramUrl,
                ...payload
            }
        },
        deleteParam: (state, action:PayloadAction<any>) => {
            let payloads = action.payload
            state.filterList = state.filterList.filter( (filter : any) => {
                return filter.displayName !== payloads.displayName})
            const {displayName, ...newPayload} = payloads
            const current = state.paramUrl
            delete current[Object.keys(newPayload).toString()]
            state.paramUrl = current
        },
        clearParam: (state, action: PayloadAction<any>) => {
            state.paramUrl = initialState.paramUrl;
            state.filterList = initialState.filterList;
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

export const {updateParams, deleteParam,clearParam} = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer