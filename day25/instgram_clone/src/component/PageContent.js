import React, { useState } from "react";
import {
  Container,
  FormControl,
  Input,
  FormHelperText,
  FormControlLabel,
  Paper,
  Grid,
  Radio,
  TextField,
  FormLabel,
  RadioGroup,
  Checkbox,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import Select from "@material-ui/core/Select";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const PageContent = () => {
  const { register, handleSubmit } = useForm();
  const [check, setCheck] = useState(false);
  const onSubmit = (e) => {
    console.log(e);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  return (
    <Container>
      <Paper className="mx-auto" style={{ width: "60%" }}>
        <form>
          <Grid container>
            <Grid item sm={6}>
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField label="Email" />
            </Grid>
            <Grid item sm={6} margin="normal">
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </form>

        <Container>
          <br />
          <br />
          <br />
          <br />
          <Grid>
            <Grid item sm={12}>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select id="demo-simple-select-label" label="Age" fullwidth>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={5}>
              <FormControlLabel
                control={<Checkbox name="checkedA" />}
                // checked={}
                label="Secondary"
              />
            </Grid>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                  <StyledTableCell align="right">Calories</StyledTableCell>
                  <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">
                    Carbs&nbsp;(g)
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Protein&nbsp;(g)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Paper>

      <Grid>
        <Grid item sm={12}>
          <TableContainer>
            <TableHead
              color="primary"
              style={{ backgroundColor: "red", fontWeight: "bold" }}
            >
              <TableRow>
                <TableCell>Hello</TableCell>
                <TableCell>Hello</TableCell>
                <TableCell>Hello</TableCell>
                <TableCell>Hello</TableCell>
                <TableCell>Hello</TableCell>
                <TableCell>Hello</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell>heoeho</TableCell>
              <TableCell>heoehoweo</TableCell>
              <TableCell>heoehoweowho</TableCell>
              <TableCell>heoehoweowho</TableCell>
              <TableCell>heoehoweowho</TableCell>
              <TableCell>heoehoweowho</TableCell>
            </TableBody>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};
export default PageContent;
