import React from 'react';
import { connect } from 'react-redux';

function HomePage(props) {
    let { products } = props.Shopping;
    let { addToCart, addToProducts } = props;
    return (
        <div style={{ display: "flex" }}>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <img alt="" src={product.image} style={{ height: "20vw" }}></img>
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>{product.price}</h3>
                        <button
                            onClick={() => {
                                addToCart();
                                addToProducts(product);
                            }}
                        >Add To Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = store => {
    return store;
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: () => {
            return dispatch({ type: "add_to_cart" });
        },

        addToProducts: (prodObj) => {
            return dispatch({ type: "change_quantity", payload: { obj: prodObj} })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
