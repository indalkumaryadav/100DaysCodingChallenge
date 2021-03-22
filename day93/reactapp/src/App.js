import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  removeUser,
  incremnet,
  decrement,
  reset,
} from "./actions/index";

function App(props) {
  const count = useSelector((state) => state.counterReducers);
  const users = useSelector((state) => state.userReducers);
  const dispatch = useDispatch();
  const userRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userRef.current.value));
    userRef.current.value = "";
  };

  return (
    <>
      <h2>React Couner</h2>
      <button onClick={() => dispatch(incremnet())}>+</button>
      <button>{count}</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <input type="text" placeholder="username" ref={userRef} />
        <button>Submit</button>
      </form>

      <h2>All Users List</h2>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name}{" "}
              <button onClick={() => dispatch(removeUser(index))}>
                Remove User
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
