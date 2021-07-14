import React from 'react'
import { connect } from 'react-redux';

function NavBar(props) {
    let { count } = props;
    return (
        <div>
            <div style={{ height: "3rem", backgroundColor: "lightgray", color: "black", fontSize: "150%", }}>
                NavBar
                <span style={{ marginLeft: "4rem" }}>{count}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return state.CartCount;
}

export default connect(mapStateToProps)(NavBar);
