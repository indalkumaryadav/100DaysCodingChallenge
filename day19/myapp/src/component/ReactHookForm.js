import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Box,
  TextField,
  Typography,
  Avatar,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import MyForm from "./MyForm";

const ReactHookForm = () => {
  const [img, setImg] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.title);
    console.log(data);
    const uploadData = new FormData();
    // uploadData.append("title", data.title);
    // uploadData.append("image", data.file);
  };

  const getAPI = () => {
    axios
      .get("http://127.0.0.1:8000/api/posts/")
      .then((response) => {
        console.log(response.data.file[0]);
        setImg(response.data[0].image);
      })
      .catch((error) => console.log(error));
  };
  const postImg = (data) => {
    axios
      .post("http://127.0.0.1:8000/api/posts/", {
        title: data.title,
        image: data.files[0],
      })
      .then((response) => {
        console.log(response);
      });
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <Container>
      <br />
      <br />
      <br />
      <MyForm />
      <br />
      <br />
      <br />
      <Paper style={{ width: "50%", padding: 10 }}>
        <h1>React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <br />
          Title
          <input type="text" name="title" ref={register} />
          <br />
          <br />
          Choose File <input type="file" name="image" ref={register} />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <img src={img} />
      </Paper>
    </Container>
  );
};
export default ReactHookForm;
