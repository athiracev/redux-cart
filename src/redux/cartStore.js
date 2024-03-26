import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'

const productStore=configureStore({
    reducer:{
        productReducer

    }
})
export default productStore