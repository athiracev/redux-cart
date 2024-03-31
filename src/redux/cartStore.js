import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'
import wishlistReducer from './slices/wishlistSlice'

const productStore=configureStore({
    reducer:{
        productReducer,
        wishlistReducer

    }
})
export default productStore