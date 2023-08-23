import  { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
    IDLE:'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',

    initialState: {
        data: [],
        status: STATUS.IDLE,
    } ,

    reducers: {
        setProduct(state, action){
            state.data = action.payload;
        }
    }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;

//Thums