import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductThunk = createAsyncThunk('product/fectchProductThunk',async()=>{
    const response= await axios.get('https://dummyjson.com/products')
    localStorage.setItem("response",JSON.stringify(response.data.products))

    // console.log(response.data.products)
    return response.data.products
})

const productSlice = createSlice({
    name:'product',
    initialState:{
        product:[],
        loading:false,
        error:'',
        productContainer:[],
        productsPerPage:10,
        currentPage:1

    },
    reducers:{
        searchProduct:(state,action)=>{
            state.product=state.productContainer.filter(item=>item.title.toLowerCase().includes(action.payload))
        },
        onNavigatePrev:(state)=>{
            state.currentPage--
        },
        onNavigateNext:(state)=>{
            state.currentPage++
        }
    },
    //extraReducers allows createSlice to respond and update its own state 
    // in response to other action types besides the types it has generated.
    extraReducers:(builder)=>{
        builder.addCase(fetchProductThunk.pending,(state,action)=>{
            state.loading=true

        }),
        builder.addCase(fetchProductThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.productContainer=action.payload
        }),
        builder.addCase(fetchProductThunk.rejected,(state,action)=>{
            state.loading=false
            state.product=[],
            state.error='Request Failed!!!'
        })

    }
   
})

export const {onNavigateNext,onNavigatePrev,searchProduct}=productSlice.actions
export default productSlice.reducer