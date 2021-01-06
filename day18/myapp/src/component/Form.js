import React from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Paper style={{ width: "50%" }}>
        <Box justifyContent="center">
          <Typography variant="h5">Hello</Typography>
          <TextField placeholder="enter" label="Outlined" variant="outlined" />
          <form onSubmit={handleSubmit(onSubmit)}>
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
