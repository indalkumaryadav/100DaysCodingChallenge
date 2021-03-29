import { combineReducers } from "redux";
import shopReducer from "./shoppping/shopping-reducer";

const rootReducers = combineReducers({ shop: shopReducer });

export default rootReducers;
