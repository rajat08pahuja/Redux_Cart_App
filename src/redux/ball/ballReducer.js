let initialState = {
    balls: 5
}

function BallReducer(state = initialState, action) {
    // update
    // types of changes
    // state change logic

    switch (action.type) {
        case "buy_ball":
            // store update
            return {
                balls: state.balls - 1
            }

        case "sell_ball":
            return {
                balls: state.balls + 1
            }

        default:
            return state;
    }
}

export default BallReducer;