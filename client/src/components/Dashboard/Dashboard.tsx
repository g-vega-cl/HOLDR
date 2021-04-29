import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grow,
  Grid,
  Typography,
} from "@material-ui/core";
import { getUserTransactions} from 'actions/stripe';
import { useDispatch, useSelector } from "react-redux";

const u = {
  result: {
    name: "",
    imageUrl: "",
  },
};

export const Dashboard = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") || JSON.stringify(u))
  );
  const dispatch = useDispatch();
  const userTransactions = useSelector((state:any)=>state.stripe);

  useEffect(()=>{
    dispatch(getUserTransactions(user.result.email));
  },[]);
  console.log("user transactions ", userTransactions)

  return (
    <div>
      <p>dashydash</p>
    </div>
  );
};
