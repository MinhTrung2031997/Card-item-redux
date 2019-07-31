import * as types from '../contants/ActionTypes';

var data = JSON.parse(localStorage.getItem('cart'));


var initialState = data ? data : [];

const products = (state = initialState, action) => {
    var { product, quantity } = action;
    switch (action.type) {
        case types.ADD_TO_CART:
            var index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state]
        case types.DELETE_CART_ITEM:
            var index_DCI = findProductInCart(state, action.product);
            state.splice(index_DCI, 1);
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.UPDATE_ITEM_QUANTITY:
            var index_UP = findProductInCart(state, action.product);
            if (index_UP !== -1 ){
                state[index_UP].quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++)
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
    }
    return index;
}


export default products;