import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState : {
        cartData : []
    },
    reducers:{
        addToCart : (state,action)=>{
            const itemInCart = state.cartData.find((item)=> item.id === action.payload.id)
            if(itemInCart){
                itemInCart.quantity++;
            }else{
                state.cartData.push({...action.payload, quantity:1})
            }
        },
        addQuantity : (state,action)=>{
            const item = state.cartData.find((item) => item.id === action.payload)
            item.quantity++
        },
        decreaseQuantity : (state,action) => {
            const item = state.cartData.find((item) => item.id === action.payload)
            if(item.quantity === 1){
                item.quantity = 1
            }else{
                item.quantity--;
            }
        },
        removeItem : (state,action)=>{
            const deleteItemCart = state.cartData.filter((item)=> item.id !== action.payload)
            state.cartData = deleteItemCart
        }
    }
})

export const {addToCart,removeItem,addQuantity,decreaseQuantity} = cartSlice.actions; 
export default cartSlice.reducer;