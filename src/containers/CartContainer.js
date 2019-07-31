import React, { Component } from 'react';
import * as Message from './../contants/Message';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as actions from './../actions/index';


class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart >
                {this.ShowCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    ShowCartItem(cart) {
        var { onDeleteCartItem, onChangeMessage, onUpdateItemQuantity } = this.props;
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    i={index}
                    onDeleteCartItem={onDeleteCartItem}
                    onChangeMessage={onChangeMessage}
                    onUpdateItemQuantity = {onUpdateItemQuantity}
                />
            });
        }
        return result;
    }

    showTotalAmount(cart) {
        var result = '';
        if (cart.length > 0) {
            result = <CartResult
                cart={cart}
            />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            inventory: PropTypes.number,
            rating: PropTypes.number
        })
    })),
    quantity: PropTypes.number
}

const mapStateToProps = state => ({
    cart: state.cart
});


const mapDispatchToProps = (dispatch, props) => ({
    onDeleteCartItem: (product) => {
        dispatch(actions.deleteCartItem(product))
    },
    onChangeMessage: (message) => {
        dispatch(actions.changeMessage(message))
    },
    onUpdateItemQuantity : (product,quantity) => {
        dispatch(actions.updateItemQuantity(product,quantity))
    },
    
});


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);

