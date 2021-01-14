import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    top: 40,
  },
}));

const Home = () => {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  return (
    <div style={{ padding: 200 }}>
      <h3>Home Page</h3>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>

      <Button onClick={handleClick({ vertical: "top", horizontal: "right" })}>
        Top-Right
      </Button>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />

      <Menu keepMounted>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>Hello There</MenuItem>
        <MenuItem>Hello There</MenuItem>
        <MenuItem>Hello There</MenuItem>
      </Menu>
    </div>
  );
};

export default Home;
