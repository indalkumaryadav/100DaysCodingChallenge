import { createStore, combineReducers } from "redux";
import homePage from "./HomePage/reducers";

const reducers = combineReducers({
  homePage,
});

export default createStore(reducers);
