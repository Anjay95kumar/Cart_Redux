import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slice"

const Store = configureStore({
    reducer: {
        cart: CartReducer
    }
})

export default Store;





