import React from "react";
import {
  TextField,
  Typography,
  Container,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  Checkbox,
  MenuItem,
  Menu,
  Input,
  InputLabel,
  Box,
  Paper,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  loginButton: {
    backgroundColor: "red",
    width: 200,
    height: 50,
    color: "white",
    "&:hover": {
      background: "red",
    },
  },
}));

function RegisterForm() {
  const classes = useStyles();

  const { register, handleSubmit, control } = useForm();
  function onsubmit(data) {
    let formData = new FormData();
    const { firstname, username, image } = data;
    formData.append("firstname", firstname);
    formData.append("username", username);
    formData.append("image", image[0]);
    console.log(data);
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(onsubmit)}>
        <TextField
          name="firstname"
          margin="normal"
          label="Name"
          fullWidth
          placeholder="enter your name"
          variant="outlined"
          inputRef={register}
        />
        <TextField
          placeholder="username"
          label="Name"
          name="username"
          margin="normal"
          fullWidth
          variant="outlined"
          inputRef={register}
        />
        <Input
          type="file"
          fullWidth
          margin="normal"
          name="image"
          inputRef={register}
        />
        <br />
        <br />
        <br />
        <br />
        <br />

        <FormControl>
          <FormLabel>Choose Your Gender</FormLabel>
          <RadioGroup row name="gender">
            <FormControlLabel
              value="male"
              margin="normal"
              label="Male"
              control={<Radio inputRef={register} />}
            />
            <FormControlLabel
              name="gender"
              value="female"
              label="Female"
              control={<Radio inputRef={register} />}
            />
          </RadioGroup>
        </FormControl>
        <FormControlLabel
          label="Terms and condition"
          control={<Checkbox name="tnc" inputRef={register} />}
        />
        <FormControl fullWidth>
          <InputLabel>Select</InputLabel>
          <Controller
            render={(props) => (
              <Select value={props.value} onChange={props.onChange}>
                <MenuItem value="fullstack">Full Stack Developer</MenuItem>
                <MenuItem value="dev">FDeveloper</MenuItem>
              </Select>
            )}
            // as={}
            name="course"
            defaultValue="fullstack"
            control={control}
          />
        </FormControl>
        <Button className={classes.loginButton} type="submit">
          Register
        </Button>
      </form>

      <Box
        style={{
          width: "50%",
          height: 400,
          backgroundColor: "red",
          margin: "auto",
        }}
      >
        <h1>Hello World</h1>
      </Box>
      <Paper md={4}>
        <h1>Register form</h1>
      </Paper>
    </Container>
  );
}
export default RegisterForm;
