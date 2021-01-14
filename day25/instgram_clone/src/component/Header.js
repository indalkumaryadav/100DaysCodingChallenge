import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import TextField from "@material-ui/core/TextField";
import { ChatBubbleRounded, AccountCircle } from "@material-ui/icons";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <TextField
          color="secondary"
          InputProps={{
            startAdornment: <SearchIcon style={{ color: "#fff" }} />,
          }}
        />

        <Button color="inherit">Login</Button>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <ChatBubbleRounded color="secondary" />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <ChatBubbleRounded style={{ color: "#fff" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <PowerSettingsNewIcon style={{ color: "#fff" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
