import React, { useState, useEffect, useRef } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createData(
  boughtAt: any,
  type: any,
  buyPrice: any,
  currentPrice: any,
  profit: any,
  close: any
) {
  return { boughtAt, type, buyPrice, currentPrice, profit, close };
}

interface ITransactionsTable {
  userTransactions: any;
  risk1CouponPrice: number;
  risk3CouponPrice: number;
  risk5CouponPrice: number;
}

export const TransactionsTable: React.FC<ITransactionsTable> = ({
  userTransactions,
  risk1CouponPrice,
  risk3CouponPrice,
  risk5CouponPrice,
}) => {
  const [rows, setRows] = useState<any>([]);
  const [closeModal, setCloseModal] = useState(false);
  const sellModalRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const handleClick = (e: any) => {
    if (sellModalRef?.current?.contains(e.target)) {
      // inside click
      return;
    } // outside click
    setCloseModal(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick); // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    setRows(
      userTransactions.map((transaction: any) => {
        switch (transaction.type) {
          case "1":
            return createData(
              transaction.boughtAt,
              transaction.type,
              transaction.openCouponPrice.toFixed(2),
              risk1CouponPrice,
              (risk1CouponPrice - transaction.openCouponPrice) *
                transaction.amount,
              "close"
            );
          case "3":
            return createData(
              transaction.boughtAt,
              transaction.type,
              transaction.openCouponPrice.toFixed(2),
              risk3CouponPrice,
              (risk3CouponPrice - transaction.openCouponPrice) *
                transaction.amount,
              "close"
            );
          case "5":
            return createData(
              transaction.boughtAt,
              transaction.type,
              transaction.openCouponPrice.toFixed(2),
              risk5CouponPrice,
              (risk5CouponPrice - transaction.openCouponPrice) *
                transaction.amount,
              "close"
            );
        }
      })
    );
  }, [userTransactions, risk1CouponPrice, risk3CouponPrice, risk5CouponPrice]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Bought at</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell align="right">Buy price</StyledTableCell>
              <StyledTableCell align="right">Current price</StyledTableCell>
              <StyledTableCell align="right">Profit</StyledTableCell>
              <StyledTableCell align="right">Close position</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <StyledTableRow key={row.boughtAt}>
                <StyledTableCell component="th" scope="row">
                  {row.boughtAt}
                </StyledTableCell>
                <StyledTableCell>{row.type}</StyledTableCell>
                <StyledTableCell align="right">${row.buyPrice}</StyledTableCell>
                <StyledTableCell align="right">
                  ${row.currentPrice.toFixed(2)}
                </StyledTableCell>
                <StyledTableCell align="right">{row.profit.toFixed(2)}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={() => setCloseModal(true)}>
                    {row.close}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {closeModal && (
        <Paper
          style={{
            width: "80%",
            height: "75%",
            position: "absolute",
            top: "5%",
            left: "5%",
          }}
          ref={sellModalRef}
        >
          <Typography variant="h4">
            To close your position, contact me on whatsapp.
          </Typography>
        </Paper>
      )}
    </div>
  );
};
