import { combineReducers } from "redux";
import userReducers from "./user";
import counterReducers from "./counter";

const allReducers = combineReducers({
  userReducers,
  counterReducers,
});

export default allReducers;
