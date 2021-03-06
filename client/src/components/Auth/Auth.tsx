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
import Icon from "./icon.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {signin, signup} from 'actions/auth';

const initialState = {firstName: '', lastName:'', email:'', password:''}

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsIsignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if(isSignUp){
      dispatch(signup(formData,history));
    } else{
      dispatch(signin(formData,history));
    }
  };
  const handleChange = (e:any) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setIsIsignUp(!isSignUp);
    setShowPassword(false);
  };

  const googleSuccess = async (res: any) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  const googleFailure = (error: any) => {
    console.log("GOOGLE FAILURE", error);
  };

  return (
    <Container>
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
                  name="lastName"
                  label="Last Name"
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
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button> */}
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
                style={{marginTop:'6px'}}
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          {/* <Grid container justify="flex-start">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid> */}
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
