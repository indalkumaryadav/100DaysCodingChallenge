import React, { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user;
  function handleChange(e) {
    console.log(e.target.value);
    setUser({ ...(user, ([e.target.name] = e.target.value)) });
  }
  return (
    <div className="App">
      <form action="">
        <h1>Registration Form</h1>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
        <br />
        <br />
        Username
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <br />
        Email
        <input type="text" name="email" value={email} onChange={handleChange} />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;
