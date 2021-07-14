import { products } from "../data/data";

let initialState = {
    products
}

function ShoppingReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default ShoppingReducer;