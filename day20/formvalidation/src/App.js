import React from "react";
import "./App.css";
import { appendErrors, useForm } from "react-hook-form";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <h1>Form Validation With React Hook Form.</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        First Name:-{" "}
        <input
          className={classNames("form-control", {
            "is-invalid": errors.first_name,
          })}
          type="text"
          name="first_name"
          ref={register({
            required: true,
            minLength: 5,
          })}
        />
        <br />
        {errors.first_name?.type === "required" && (
          <div className="invalid-feedback">This Field is required</div>
        )}
        <small style={{ color: "red" }}>
          {errors.first_name?.type === "minLength" &&
            "minimum five charecter is required"}
        </small>
        <br />
        Last Name:-{" "}
        <input
          type="text"
          name="last_name"
          ref={register({
            required: "this field is required!",
            minLength: {
              value: 5,
              message: "Minimum Five charecter is required.",
            },
          })}
        />
        <br />
        <br />
        Email:-{" "}
        <input
          type="email"
          name="email"
          ref={register({
            required: true,
          })}
        />
        <br />
        <br />
        Password:-{" "}
        <input
          type="password"
          name="password"
          ref={register({
            required: true,
          })}
        />
        <br />
        <br />
        Choose Image :-{" "}
        <input
          type="file"
          name="image"
          ref={register({
            required: true,
          })}
        />
        <br />
        <br />
        Phone Number:-{" "}
        <input
          type="number"
          name="phone"
          ref={register({
            required: true,
          })}
        />
        <br />
        <br />
        Select Your State:-
        <select
          name="state"
          ref={register({
            required: true,
          })}
        >
          <option value="bihar">Bihar</option>
          <option value="asam">Asam</option>
          <option value="up">UP</option>
          <option value="rajsthan">Rajstahn</option>
        </select>
        <br />
        <br />
        Male :-{" "}
        <input
          type="radio"
          value="male"
          name="gender"
          ref={register({
            required: true,
          })}
        />
        FeMale :-{" "}
        <input
          type="radio"
          value="female"
          name="gender"
          ref={register({
            required: true,
          })}
        />
        <br />
        <br />
        <input
          type="checkbox"
          name="terms"
          ref={register({
            required: true,
          })}
        />
        check terms and conditions
        <br />
        <br />
        <button type="submit">Create Data</button>
      </form>
    </div>
  );
};

export default App;
