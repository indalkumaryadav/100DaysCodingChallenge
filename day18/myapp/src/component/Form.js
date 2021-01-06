import React from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data.title);
    console.log(data.image[0].name);
    axios
      .post("http://127.0.0.1:8000/api/posts/", {
        title: data.title,
        image: data.image[0].name,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <Paper style={{ width: "50%" }}>
        <Box justifyContent="center">
          <Typography variant="h5">Hello</Typography>
          <TextField placeholder="enter" label="Outlined" variant="outlined" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="title" ref={register} />
            <input
              type="file"
              name="image"
              ref={register({ required: "indal required" })}
            />
            <button type="submit">Submit</button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Form;
