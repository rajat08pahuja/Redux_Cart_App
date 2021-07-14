import React, { useState } from 'react'
import { connect } from 'react-redux';

function Bat(props) {
    const [value, setValue] = useState("");

    return (
        <div>
            <h1>Number of Bats: {props.quantity}</h1>
            <input value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            ></input>
            <button onClick = {(e) => {
                props.setBat(value);
                setValue("");
            }}>Buy Bat</button>
        </div>
    )
}

const mapStateToProps = store => {
    console.log("in map state to prop" , store);
    return store.Bat;
}

const mapDispatchToProps = dispatch => {
    return {
        setBat: (val) => {
            dispatch({
                type: "buy_bat",
                payload: val
            })
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Bat);
