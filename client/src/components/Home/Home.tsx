import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { Form } from "components/Form/Form";
import { Posts } from "components/Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "actions/posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch">
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;