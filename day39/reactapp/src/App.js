import React from "react";
import "./App.css";
import ReactHookForm from "./ReactHookForm";

function App() {
  function convertFD2JSON(formData) {
    let obj = {};
    for (let key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return JSON.stringify(obj);
  }
  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("name", "Indal");
    formData.append("age", 20);
    formData.append("salery", 20000);
    const json = convertFD2JSON(formData);

    const URL = "http://127.0.0.1:8000/";
    fetch(URL, {
      method: "POST",
      body: json,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <h3>Kumar</h3>
      <h1>Regitration Form</h1>
      <form>
        Name :- <input name="name" id="name" type="text" />
        <br></br>
        Age :- <input name="age" id="age" type="number" />
        <br></br>
        Salery :- <input name="salery" id="salery" type="text" />
        <br></br>
      </form>
      <button onClick={handleSubmit}>Submit</button>

      <ReactHookForm />
    </div>
  );
}

export default App;
