import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "components/Auth/input";
import { GoogleLogin } from "react-google-login";
import Icon from './icon.js';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsIsignUp] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleSubmit = () => {};
  const handleChange = () => {};

  const handleShowPassword = (showPass: boolean) => {
    showPass ? setShowPassword(showPass) : setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setIsIsignUp(!isSignUp);
    handleShowPassword(false);
  };

  const googleSuccess = async (res: any) =>{
    console.log("goog success ", res)
    const result = res?.profileObj;
    const token = res?.tokenId;

    try{
      dispatch({type:'AUTH', data: {result,token}});
      history.push("/");
    }catch(e){
      console.log(e)
    }
  }

  const googleFailure = (error:any) =>{
    console.log("GOOGLE FAILURE", error)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}

            <Input
              name="email"
              label="Email Adress"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="694141851748-g1k0fjoel6cc1q316edptlsvapdmbedt.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
