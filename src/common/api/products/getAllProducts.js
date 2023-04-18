import { getAllProductsDataFailure, getAllProductsDataRequest, getAllProductsDataSuccess } from "../../../store/slices/ProductsSlice"
import { store } from "../../../store/store"
import apiCall from '../apiCall';
import { API_CONFİG } from "../apiConfig";


const getAllProducts = async (page , perPage) => {
    store.dispatch(getAllProductsDataRequest());

    let { URL, METHOD } = API_CONFİG.PRODUCTS.GET_ALL_PRODUCTS;

    URL = `/products?page=${page}&limit=${perPage}`;

    try {
        const response = await apiCall(METHOD, URL);
        store.dispatch(getAllProductsDataSuccess(response.data));
        return response.data || [];

    } catch (error) {
        store.dispatch(getAllProductsDataFailure());
    }

}

export default getAllProducts

