import * as types from './../contants/ActionTypes';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MSG,
        message
    }
}


export const deleteCartItem = (product) => {
    return {
        type: types.DELETE_CART_ITEM,
        product
    }
}

export const updateItemQuantity = (product,quantity) => {
    return {
        type : types.UPDATE_ITEM_QUANTITY,
        product,
        quantity
    }
}
