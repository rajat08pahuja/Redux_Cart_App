import { createStore } from "redux";
import rootReducer from "../cartRedux/rootReducer";

const store = createStore(rootReducer);
export default store;