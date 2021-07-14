let initialState = {
    count: 0
}

function cartCountReducer(state = initialState, action) {
    switch (action.type) {
        case "add_to_cart":
            return {
                count: state.count + 1
            }
        case "remove_from_cart":
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
}

export default cartCountReducer;