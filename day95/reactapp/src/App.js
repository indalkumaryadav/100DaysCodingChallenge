import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { add, remove, reset, addUser } from "./store/actions/index";

function App() {
  const count = useSelector((state) => state.counterReducers);
  const dispatch = useDispatch();
  const userRef = useRef();
  const user = useSelector((state) => state.userReducers);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userRef.current.value));
    userRef.current.value = "";
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(add())}>Add</button>
      <p>{count}</p>
      <button onClick={() => dispatch(remove())}>Remove</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <form onSubmit={handleSubmit}>
        <input placeholder="name" name="name" ref={userRef} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {user.map((item) => {
          return (
            <li>
              {item.name} <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
