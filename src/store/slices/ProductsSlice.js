import { createSlice } from '@reduxjs/toolkit'
import { API_STATUS } from '../../common/apiStatus';

const initialState = {
    allProducts: [],

    getAllProductsDataApiStatus: API_STATUS.NONE,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

        getAllProductsDataRequest: (state) => {
            state.getAllProductsDataApiStatus = API_STATUS.REQUEST;
        },
        getAllProductsDataSuccess: (state, action) => {
            state.getAllProductsDataApiStatus = API_STATUS.SUCCESS;
            state.allProducts = action.payload;
        },
        getAllProductsDataFailure: (state) => {
            state.getAllProductsDataApiStatus = API_STATUS.FAILURE;
        }


    },
})


export const {
    getAllProductsDataRequest,
    getAllProductsDataSuccess,
    getAllProductsDataFailure,
} = productsSlice.actions

export default productsSlice.reducer