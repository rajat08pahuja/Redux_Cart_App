import { combineReducers } from "redux";
import BatReducer from './bat/batReducer';
import BallReducer from './ball/ballReducer';
import userReducer from "./user/userReducer";

console.log("root reducer");

const rootReducer = combineReducers({
    Ball: BallReducer,
    Bat: BatReducer,
    User: userReducer
})

export default rootReducer;