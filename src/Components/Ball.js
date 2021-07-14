import React from 'react';
import { connect } from 'react-redux';

function Ball(props) {
    return (
        <div>
            <h1>Number of Balls {props.balls}</h1>
            <button
                onClick={props.buyball}
            >Buy Balls</button>
            <button
                onClick={props.sellball}
            >Sell Balls</button>
        </div>
    )
}

// provides state variables from store to props
const mapStateToProps = store => {
    console.log("in map state to prop", store);
    return store.Ball;
}

const mapDispatchToProps = dispatch => {
    return {
        buyball: () => {
            return dispatch({type: "buy_ball"});
        },

        sellball: () => {
            return dispatch({type: "sell_ball"});
        }
    }
}

// higher order function
export default connect(mapStateToProps , mapDispatchToProps)(Ball);
