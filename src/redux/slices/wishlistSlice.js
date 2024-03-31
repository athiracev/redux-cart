import { createSlice } from "@reduxjs/toolkit";


const wishSlice =createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        addWishList:(state,action)=>{
            state.wishlist.push(action.payload)
        },
        removeFromwishList:(state,action)=>{
            state.wishlist = state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
    
})

export const {addWishList,removeFromwishList}=wishSlice.actions
export default wishSlice.reducer