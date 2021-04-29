import url from 'url';
import { CREATE_TRANSACTIONS, FETCH_TRANSACTIONS } from "constants/actionTypes";
import * as api from "../api";

// Action Creators

//dispatch is from redux-thunk
export const getTransactions = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchTransactions();
    dispatch({ type: FETCH_TRANSACTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUserTransactions = (email:string) => async (dispatch: any) => {
  try {
    const { data } = await api.fetchUserTransactions(email);
    dispatch({ type: FETCH_TRANSACTIONS, payload: data });
  } catch (error) {
    console.log("getUserTransactionsError ", error);
  }
};

export const createTransaction = (newTransaction: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createTransaction(newTransaction);
    dispatch({ type: CREATE_TRANSACTIONS, payload: data });
  } catch (e) {
    console.log(e);
  }
};

