import {createSlice} from "@reduxjs/toolkit";
import {add, edit, getAll, getById, getProductDetailById, remove} from "../services/productService";

const initialState = {
    list: [],
    productEdit: {

    },
    productDetail: {

    }
}

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
        builder.addCase(add.fulfilled, (state, {payload}) => {
            state.list.push(payload);
            console.log(payload)
        })
        builder.addCase(remove.fulfilled, (state, {payload}) => {
            state.list.splice(state.list.indexOf(payload));
        })
        builder.addCase(getById.fulfilled, (state, {payload}) => {
            state.productEdit = payload;
        })
        builder.addCase(edit.fulfilled, (state, {payload}) => {
            for (let i = 0; i < state.list.length; i++) {
                if(state.list[i].id === payload.id){
                    state.list[i] = payload;
                }
            }
        })
        builder.addCase(getProductDetailById.fulfilled, (state, {payload}) => {
            state.productDetail = payload;
        })
    }
})

export default productSlice.reducer