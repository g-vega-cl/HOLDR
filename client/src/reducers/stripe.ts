import {FETCH_TRANSACTIONS, CREATE_TRANSACTIONS, UPDATE, DELETE} from 'constants/actionTypes';

export default (transactions: any = [], action: any) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
        console.log("stripe reducer payload", action.payload)
      return action.payload;
    case CREATE_TRANSACTIONS:
      return [...transactions, action.payload];
    case UPDATE:
      return transactions.map((transaction: any) =>
        transaction._id === action.payload._id ? action.payload : transaction
      );
    default:
      return transactions;
  }
};
