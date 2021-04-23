import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { HoldrRules } from "./HoldrRules";
import { TypesOfCoupons } from "./TypesOfCoupons";
import { useDispatch } from "react-redux";
import { getPosts } from "actions/posts";
import { RiskCharts } from "components/Home/RiskCharts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const [couponType, setCouponType] = useState("1");

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
          backgroundColor: "rgb(245, 250, 245,.5)",  //! Also in NavBar styles
          fontWeight: "bold",
          overflow: "hidden",
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
            <TypesOfCoupons setCouponType={setCouponType}/>
          </Grid>
          <Grid item xs={12}>
            <RiskCharts type={couponType}/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
