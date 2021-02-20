import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  function convertFD2JSON(formData) {
    let obj = {};
    for (let key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return JSON.stringify(obj);
  }

  const onchange = (event) => {
    let formData = new FormData();
    formData.append("image", event.target.files[0]);
    formData.append("name");
    formData.append("age", event.target.files[0]);
    formData.append("salery", event.target.files[0]);
  };
  return (
    <div>
      <h1>Form</h1>
      <form>
        name
        <input onChange={onchange} name="name" type="text" />
        age
        <input onChange={onchange} name="age" type="number" />
        salery
        <input onChange={onchange} name="salery" type="number" />
        <input onChange={onchange} name="image" type="file" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ReactHookForm;
