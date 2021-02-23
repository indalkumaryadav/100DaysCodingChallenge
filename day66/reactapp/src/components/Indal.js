import React, { useState } from "react";

function Indal() {
  const [increment, setIncrement] = useState(0);

  function handleClick() {
    setIncrement();
  }
  return (
    <div>
      <h1>{increment}</h1>
      <button onClick={handleClick}>Increament</button>
    </div>
  );
}
export default Indal;
