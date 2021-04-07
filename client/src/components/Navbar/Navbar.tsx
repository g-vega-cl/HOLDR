import React, {useState, useEffect} from "react";
import { AppBar, Avatar, Button, Typography, Toolbar } from "@material-ui/core";
import frog from "images/frog.png";
import decode from 'jwt-decode';
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import {useDispatch} from 'react-redux';


const u = {
  result: {
    name: "",
    imageUrl: ""
  },
}
const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile') || JSON.stringify(u)));

  console.log("usr ", user)

  useEffect(()=>{
    const token = user?.token;

    if(token){
      const decodedToken = decode<any>(token);
      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    //JWT... (For manual signup)
    setUser(JSON.parse(localStorage.getItem('profile') || JSON.stringify(u)))
  },[location])


  const logout = () =>{
    dispatch({type: 'LOGOUT'});
    setUser(u);
    history.push('/');
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
