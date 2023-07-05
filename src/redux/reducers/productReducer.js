import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
};

const initialCartState = {
    cartProducts: [],
};
/*
const initialCartState = 10;
*/

export const productReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;    
    }
}


export const selectedProductReducer = (state = {} , {type,payload}) => {
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        default:
            return state;    
    }
}


export const cartPriceReducer = (state = 0 , {type,payload}) => {
    switch (type){
        case ActionTypes.UPDATE_CART_PRICE:
            return state+payload;
        default:
            return state;    
    }
}


export const updateCartReducer = (state = initialCartState , {type,payload}) => {
    switch (type){
        case ActionTypes.UPDATE_CART:
            return {...state,products:payload}; //{...state,...payload}; //return state; //return {...state,payload};
        default:
            return state;    
    }
}