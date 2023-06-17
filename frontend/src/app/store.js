import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../utils/bmi-slice'


export const store = configureStore({
    reducer:{
        counter : productReducer
    }
})