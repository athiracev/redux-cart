import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[] ,
    reducers:{
        addCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                state=state.filter(item=>item.id!= existingProduct.id)
                existingProduct.quantity++
                state.push(existingProduct)
            }else{
                state.push({...action.payload,quantity:1})
            }
            alert('Item added to cart!!!')
        
        },
        removeFromcart:(state,action)=>{
           return state= state.filter(item=>item.id!==action.payload)
        },
        emptyCart:(state)=>{
            state=[]
            return state
        },
        incQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id == action.payload)
            existingProduct.quantity++
            state=state.filter(item=>item.id!=existingProduct.id)
            state.push(existingProduct)
        },
        decQuantity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            state=state.filter(item=>item.id!= existingProduct.id)
            state.push(existingProduct)
        }
    }
})

export const{addCart,removeFromcart,emptyCart,incQuantity,decQuantity}=cartSlice.actions
export default cartSlice.reducer