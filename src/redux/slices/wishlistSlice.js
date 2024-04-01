import { createSlice } from "@reduxjs/toolkit";


const wishSlice =createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        
        addWishList:(state,action)=>{
            const existingProduct = state.wishlist.find(item=>item.id==action.payload.id)
        if(existingProduct){
            alert('product already added')
        }else{
            state.wishlist.push(action.payload)
alert('Product added successfully')
            
        }
        },
        removeFromwishList:(state,action)=>{
            state.wishlist = state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
    
})

export const {addWishList,removeFromwishList}=wishSlice.actions
export default wishSlice.reducer