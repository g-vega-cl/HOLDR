import React from "react";
import { AppBar, Avatar, Button, Typography, Toolbar } from "@material-ui/core";
import frog from "images/frog.png";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();

  const user = {
    result: {
      name: "",
      imageUrl: ""
    },
  };

  const logout = () =>{

  }

  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div>
        <Typography
          component={Link}
          to="/"
          variant="h2"
          align="center"
          className={classes.heading}
        >
          Review
        </Typography>
        <img
          src={frog}
          alt="feedback"
          height="60"
          className={classes.image}
        ></img>
      </div>
      <Toolbar className={classes.toolbar}>
        {user.result.name ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.purple}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
