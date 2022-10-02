import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { driverReducer } from "./driverReducer";

export default combineReducers({
    cartReducer,
    driverReducer
})