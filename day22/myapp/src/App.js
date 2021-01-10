import react from "react";
import "./App.css";
import {
  TextField,
  InputAdornment,
  Box,
  Container,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";

function App() {
  return (
    <Container>
      <Paper component={Box} p={4} width="30%" mx="auto">
        <Box>
          <Typography align="center" variant="h4">
            Form Submit
          </Typography>
          <TextField
            variant="outlined"
            label="Email"
            required
            fullWidth
            margin="normal"
            helperText="minimum 5 charecter"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Home color="secondary" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            margin="normal"
            placeholder="enter your email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Home color="secondary" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            label="Email"
            margin="normal"
            placeholder="enter your password"
            type="number"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Home color="secondary" />
                </InputAdornment>
              ),
            }}
          />
          <Box p={4}>
            <Button
              margin="normal"
              variant="contained"
              fullWidth
              color="secondary"
            >
              Submit Data
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
