import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,cartPriceReducer,updateCartReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product:selectedProductReducer,
    cartPrice:cartPriceReducer,
    updateCart:updateCartReducer
});

export default reducers;