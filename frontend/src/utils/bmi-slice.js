import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name : "product",
    initialState :{
        BMI : 0,
    },
    reducers: {
        update : (state,action) => {
            state.BMI = action.payload.BMI;
        }
    }
})
export const {update} = productSlice.actions;
export default productSlice.reducer;