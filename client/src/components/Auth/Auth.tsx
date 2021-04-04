import React, {useState} from "react";
import {Avatar, Button,Container, Paper, Grid, Typography, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from 'components/Auth/input';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const isSignUp = false;
  const handleSubmit =() =>{

  }

  const handleChange = () =>{

  }

  const handleShowPassword = () =>{
    setShowPassword(!showPassword);
  }
  
  return(
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation = {3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                  <Input name="firstName" label="First Name" handleChange={handleChange} half/>
                </>
              )}

          <Input name="email" label="Email Adress" handleChange={handleChange} type="email"/>
          <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
          {isSignUp && <Input name="confirmPassword" label = "repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type = "submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
      </Paper>
    </Container>
  ) 
};

export default Auth;
