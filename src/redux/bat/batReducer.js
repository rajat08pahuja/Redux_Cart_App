let initialState = {
    quantity: 20,
}

function BatReducer(state = initialState, action) {
    switch (action.type) {
        case "buy_bat":
            console.log(action.payload);
            return ({
                ...state,
                quantity: state.quantity - action.payload
            })

        default:
            return state;
    }
}

export default BatReducer;