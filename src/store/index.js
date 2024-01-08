import { configureStore } from "@reduxjs/toolkit";
import  ContactSlice  from "./slices/ContatcSlice";

const store = configureStore({
    reducer: {
        contacts: ContactSlice,
    }
})

export default store;