import React, {useEffect, useState} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import {useDispatch} from 'react-redux';
import {getPosts} from "actions/posts";

import frog from "./images/frog.png";
import { Form } from "./components/Form/Form";
import { Posts } from "./components/Posts/Posts";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch, currentId]);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          Review
        </Typography>
        <img
          src={frog}
          alt="feedback"
          height="60"
          className={classes.image}
        ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
