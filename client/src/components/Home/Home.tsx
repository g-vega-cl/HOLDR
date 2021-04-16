import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { HoldrRules } from "./HoldrRules";
import { TypesOfCoupons } from "./TypesOfCoupons";
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
      <Container
        style={{
          margin: "0",
          padding: "0",
          maxWidth: "150vw",
          backgroundColor: "rgb(229, 238, 229,.5)",
          fontWeight:'bold',
        }}
      >
        <Grid
          container
          style={{ padding: "23px" }}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <HoldrRules />
          </Grid>
          <Grid item xs={12}>
            <TypesOfCoupons />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
