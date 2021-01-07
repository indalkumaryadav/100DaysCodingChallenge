import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h3">Create an account</Typography>
        <TextField
          variant="outlined"
          placeholder="enter your email"
          fullWidth
          required
          inputRef={register}
          margin="normal"
          name="email"
        />
        <TextField
          variant="outlined"
          placeholder="enter your email"
          fullWidth
          required
          name="password"
          inputRef={register}
          margin="normal"
        />
        <TextField
          variant="outlined"
          placeholder="enter your email"
          fullWidth
          required
          name="fullname"
          inputRef={register}
          margin="normal"
          autoFocus
        />
        <Button type="submit" fullWidth style={{ backgroundColor: "green" }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
