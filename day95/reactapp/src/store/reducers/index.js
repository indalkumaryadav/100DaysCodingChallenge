import { combineReducers } from "redux";
import counterReducers from "./counterReducers";
import userReducers from "./userReducers";
const allReducers = combineReducers({
  counterReducers,
  userReducers,
});

export default allReducers;
