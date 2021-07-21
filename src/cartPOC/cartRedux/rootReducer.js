import { combineReducers } from "redux";
import cartCountReducer from "./cartCountReducer";
import productsInCartsReducer from "./productsInCartReducer";
import ShoppingReducer from "./ShoppingReducer";

const rootReducer = combineReducers({
    CartCount: cartCountReducer,
    Shopping: ShoppingReducer,
    ProductsInCarts: productsInCartsReducer
})

export default rootReducer;