import React, { Component } from 'react';
import Products from './../components/Products';
import { connect } from 'react-redux';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { addToCart, changeMessage } from './../actions/index';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products >
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        var { onAddToCart, onChangeMessage } = this.props;
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage ={onChangeMessage}

                />
            });
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            inventory: PropTypes.number,
            rating: PropTypes.number
        }))
}


const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = (dispatch, props) => ({
    onAddToCart: (product) => {
        dispatch(addToCart(product, 1))
    },
    onChangeMessage: (message) => {
        dispatch(changeMessage(message))
    }
});



export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

