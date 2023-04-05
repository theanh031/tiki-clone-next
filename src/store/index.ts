import { configureStore, createSlice } from "@reduxjs/toolkit"
import productReducer from "./reducers/products"
import { useDispatch } from "react-redux"
import { productApi } from "../service/product.service"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import paramUrlReducer from "./reducers/paramUrl"

export const store = configureStore({
  reducer: {
    paramUrlReducer,
    productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
  
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

