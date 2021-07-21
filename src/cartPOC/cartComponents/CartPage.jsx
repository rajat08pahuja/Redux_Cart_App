import React, { useState } from 'react'
import { connect } from 'react-redux';

function CartPage(props) {
    let { productsInCartsArr, totalAmount } = props.ProductsInCarts;
    let { deleteItem, changeQuantity, applyCoupon, removeCoupon } = props;
    let [cCoupon, setcCoupon] = useState("");
    let [couponStatus, setCouponStatus] = useState(false);

    return (
        <div>
            Cart Page
            {
                productsInCartsArr.map((product) => {

                    return (
                        <div key={product.id}>
                            <img alt="" src={product.image} style={{ height: "20vw" }}></img>
                            <h2>{product.title}</h2>
                            <div>{product.description}</div>
                            <h3>{product.price * product.quantity}</h3>
                            <input
                                type="number"
                                onChange={(e) => {
                                    changeQuantity(product, e.target.value);
                                }}
                                value={product.quantity}
                            ></input>
                            <button
                                onClick={() => {
                                    deleteItem(product);
                                }}
                            >Delete</button>
                        </div>
                    )
                })
            }
            <h2>Cart Summary</h2>
            <h4>SubTotal Rs. {totalAmount}</h4>
            <input
                type="text"
                placeholder="Enter Code"
                value={cCoupon}
                onChange={(e) => {
                    setcCoupon(e.target.value);
                }}
                disabled = {couponStatus}
            ></input>
            <button
                onClick={() => {
                    applyCoupon(cCoupon);
                    setCouponStatus(true);
                }}
            >Apply</button>
            <button
                onClick={() => {
                    removeCoupon(cCoupon);
                    setCouponStatus(false);
                    setcCoupon("");
                }}
                disabled = {!couponStatus}
            >Remove Coupon</button>
            <h4>
                <button>Proceed To Buy</button>
            </h4>
        </div>
    )
}

const mapStateToProps = store => {
    return store;
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (prodObj) => {
            return dispatch({ type: "delete_item", payload: { obj: prodObj } });
        },
        changeQuantity: (prodObj, quantity) => {
            return dispatch({ type: "change_quantity", payload: { obj: prodObj, quantity } });
        },
        applyCoupon: (coupon) => {
            return dispatch({ type: "apply_coupon", payload: { code: coupon } });
        },
        removeCoupon: (coupon) => {
            return dispatch({ type: "remove_coupon", payload: {} })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
