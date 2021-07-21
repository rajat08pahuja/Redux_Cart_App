import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar(props) {
    let { count } = props;
    return (
        <div>
            <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
                <Link to="/">Redux Shopping</Link>
                <span style={{ marginLeft: "4rem" }}>{count}</span>
                <Link to='/cart'>
                    <button>Cart</button>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return state.ProductsInCarts;
}

export default connect(mapStateToProps)(NavBar);
