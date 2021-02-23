import React, { useState } from "react";
import "./App.css";
import Indal from "./components/Indal";
import Home from "./pages/Home";

function App() {
  const [increment, setIncrement] = useState(0);

  function handleClick() {
    setIncrement(increment + 1);
  }
  function decrement() {
    setIncrement(increment - 1);
  }
  return (
    <div className="App">
      <h1>{increment}</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={decrement}>Decrement</button>
      <Home />
      <Indal />
    </div>
  );
}

export default App;
