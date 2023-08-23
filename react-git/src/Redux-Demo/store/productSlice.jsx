import  { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
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

    /* reducers: {
        setProduct(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
    } */

    extraReducers: (builder) => {
        builder

        .addCase(fetchProducts.pending,  (state, action) => {
            state.status = STATUS.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUS.IDLE;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUS.ERROR;
        })
    }
});

export const {setProduct, setStatus} = productSlice.actions;
export default productSlice.reducer;

//Thunks

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch("http://fakestoreapi.com/products");
    const data = await res.json();

    return data;
})  


/* export function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState){

        dispatch(setStatus(STATUS.LOADING));
        try{
            const res = await fetch("http://fakestoreapi.com/productss");

            const data = await res.json();
            dispatch(setProduct(data));
            dispatch(setStatus(STATUS.IDLE));
        } catch(err){
            console.log(err);
            dispatch(setStatus(STATUS.ERROR));
        }
    }
} */