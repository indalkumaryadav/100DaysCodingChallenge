import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { increament } from "./actions/index";
function App() {
  const count = useSelector((state) => state.CounterReducers);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(increament())}>Increment</button>
        <button>{count}</button>
        <button onClick={() => dispatch(increament())}>Decrement</button>
      </div>
    </>
  );
}

export default App;
