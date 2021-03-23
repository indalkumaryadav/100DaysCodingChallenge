import CounterReducers from "./CounterReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  CounterReducers,
});

export default allReducers;
