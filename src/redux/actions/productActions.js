import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products

    }
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product

    }
};

export const cartPrice = (price) => {
    return {
        type: ActionTypes.UPDATE_CART_PRICE,
        payload: price

    }
};

export const updateCart = (cartProducts) => {

    if(typeof ActionTypes.UPDATE_CART === 'undefined')
    console.log("TYPE UNDEFINED");

    return {
        type: ActionTypes.UPDATE_CART,
        payload: cartProducts

    }
};