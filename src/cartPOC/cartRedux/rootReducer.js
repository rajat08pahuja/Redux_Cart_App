import { combineReducers } from "redux";
import cartCountReducer from "./cartCountReducer";
import ShoppingReducer from "./ShoppingReducer";

const rootReducer = combineReducers({
    CartCount: cartCountReducer,
    Shopping: ShoppingReducer
})

export default rootReducer;