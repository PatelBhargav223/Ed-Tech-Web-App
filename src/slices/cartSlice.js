import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"

const intialState ={
    totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) :0

};
const cartSlice = createSlice({
    name:"cart",
    intialState:intialState,
    reducers:{
        setTotalItems(state,value){
            state.totalItems = value.payload;
        },
        // adding items to the cart , Function to add items to the cart
        addItemToCart(state) {
            state.totalItems += 1; // Increment totalItems
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems)); // Update localStorage
            toast.success("Item added to cart"); // Show success message
        },
        // function to remove items from the cart 
        removeItemFromCart(state) {
            if (state.totalItems > 0) {
                state.totalItems -= 1; // Decrement totalItems if greater than zero
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems)); // Update localStorage
                toast.success("Item removed from cart"); // Show success message
            } else {
                toast.error("No items in the cart to remove"); // Error if cart is empty
            }
        },

        // Reset the cart  
        resetCart(state){
            state.totalItems = 0;
            localStorage.removeItem("totalItems");
            toast.success("cart has been reset")

        },
    }
})
export const {setTotalItems, addItemToCart, removeItemFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;  