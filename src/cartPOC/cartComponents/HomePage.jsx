import React from 'react';
import { connect } from 'react-redux';

function HomePage(props) {
    let { products } = props.Shopping;
    let { addToCart } = props;
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
