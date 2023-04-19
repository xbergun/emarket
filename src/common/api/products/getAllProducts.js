import { useSelector } from "react-redux";
import {
  getAllProductsDataFailure,
  getAllProductsDataRequest,
  getAllProductsDataSuccess,
} from "../../../store/slices/ProductsSlice";
import { store } from "../../../store/store";
import apiCall from "../apiCall";
import { API_CONFİG } from "../apiConfig";

const getAllProducts = async (
  page,
  perPage,
  sortByApi = { sortBy: "createdAt", order: "desc" },
  search = ""
) => {
  store.dispatch(getAllProductsDataRequest());

  let { URL, METHOD } = API_CONFİG.PRODUCTS.GET_ALL_PRODUCTS;

  let { sortBy, order } = sortByApi;

  // URL'yi parametrelerle oluştur
  const params = new URLSearchParams();
  params.append("page", page);
  params.append("limit", perPage);
  if (sortBy) params.append("sortBy", sortBy);
  if (order) params.append("order", order);
  if (search) params.append("search", search);
  URL = `${URL}?${params}`;

  try {
    const response = await apiCall(METHOD, URL);
    store.dispatch(getAllProductsDataSuccess(response.data));
    return response.data || [];
  } catch (error) {
    store.dispatch(getAllProductsDataFailure());
  }
};

export default getAllProducts;
