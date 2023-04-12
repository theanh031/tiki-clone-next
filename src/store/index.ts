import { configureStore} from "@reduxjs/toolkit"
import productReducer from "./reducers/products"
import { productApi } from "../service/product.service"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: {
    productReducer,
  },

})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

