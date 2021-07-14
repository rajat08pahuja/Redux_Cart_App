import React, { useEffect, useState } from 'react';
import { products } from "../cartPOC/data/data";
import { connect } from 'react-redux';

function Home(props) {

    useEffect(() => {
        products.forEach((prodObj) => {
            props.addProd(prodObj);
        })
    } , []);
    return (
        <div>
            {props.products.map((prodobj) => {
                let title = prodobj.title;
                let description = prodobj.description;
                let price = prodobj.price;
                let image = prodobj.image;

                return (
                    <div>
                        <img alt=" " src={image}></img>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <h2>{price}</h2>
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
        addProd: (prodObj) => {
            return dispatch({type : "add_product" , payload: prodObj})
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);
