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
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import StarRateIcon from "@material-ui/icons/StarRate";

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
  name: any,
  couponPrice: any,
  returns: any,
  drawdawn: any,
  risk: any,
  buy: any
) {
  return { name, couponPrice, returns, drawdawn, risk, buy };
}

const stars = (num: number) => {
  if (num === 1) {
    return (
      <>
        <StarRateIcon />
      </>
    );
  }
  if (num === 3) {
    return (
      <>
        <StarRateIcon />
        <StarRateIcon />
        <StarRateIcon />
      </>
    );
  }
  if (num === 5) {
    return (
      <>
        <StarRateIcon />
        <StarRateIcon />
        <StarRateIcon />
        <StarRateIcon />
        <StarRateIcon />
      </>
    );
  }
};

//Make new route. buy route.
interface ITypesOfCoupons {
  setCouponType: any;
  tickerData: any;
}

interface ITickerData {
  ticker: string;
  closePrice: any;
  date: string;
}

export const TypesOfCoupons: React.FC<ITypesOfCoupons> = ({
  setCouponType,
  tickerData,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [risk1CouponPrice, setRisk1CouponPrice] = useState(0);
  const [risk3CouponPrice, setRisk3CouponPrice] = useState(0);
  const [risk5CouponPrice, setRisk5CouponPrice] = useState(0);
  const [rows, setRows] = useState<any>([
    createData("Bonds and S&P", risk1CouponPrice, 47, 17, 1, "1"),
    createData("Total world market", risk3CouponPrice, 75, 40, 3, "3"),
    createData("3x US markets", risk5CouponPrice, 723, 75, 5, "5"),
  ]);

  useEffect(() => {
    if (tickerData.length > 0) {
      let SPYData = 0;
      let BNDXData = 0;
      let VTData = 0;
      let TQQQData = 0;
      let UPROData = 0;
      tickerData.forEach((symbol: any) => {
        switch (symbol.ticker) {
          case "SPY":
            SPYData = symbol.closePrice * (30 / 209.839996);
            break;
          case "BNDX":
            BNDXData = symbol.closePrice * (70 / 54.689999);
            break;
          case "VT":
            VTData = symbol.closePrice * (100 / 58.65);

            break;
          case "TQQQ":
            TQQQData = symbol.closePrice * (50 / 8.708333);
            break;
          case "UPRO":
            UPROData = symbol.closePrice * (50 / 22.26);
            break;
          default:
            break;
        }
      });

      setRisk1CouponPrice(SPYData + BNDXData);
      setRisk3CouponPrice(VTData);
      setRisk5CouponPrice(TQQQData + UPROData);
    }
  }, [tickerData]);

  useEffect(() => {
    const currentRows = [
      createData("Bonds and S&P", risk1CouponPrice, 47, 17, 1, "1"),
      createData("Total world market", risk3CouponPrice, 75, 40, 3, "3"),
      createData("3x US markets", risk5CouponPrice, 723, 75, 5, "5"),
    ];
    setRows(currentRows);
  }, [risk1CouponPrice, risk3CouponPrice, risk5CouponPrice]);

  const goToBuy = (couponId: string) => {
    history.push(`/buy/${couponId}`);
  };

  const updateCouponType = (newType: string) => {
    setCouponType(newType);
  };
  return (
    <div>
      <Box fontWeight="fontWeightBold" marginBottom="10px">
        Higher risk means higher returns, but higher volatility. If you don't
        want to see large swings in the value of your investment, pick safer
        coupons.
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Coupon price*</StyledTableCell>
              <StyledTableCell align="right">5 year return**</StyledTableCell>
              <StyledTableCell align="right">
                5 year maximum loss***
              </StyledTableCell>
              <StyledTableCell align="right">Risk rating</StyledTableCell>
              <StyledTableCell align="right">Buy</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <Button onClick={() => updateCouponType(row.buy)}>
                    {row.name}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  ${row.couponPrice.toFixed(2)}
                </StyledTableCell>
                <StyledTableCell align="right" style={{ color: "green" }}>
                  {row.returns}%
                </StyledTableCell>
                <StyledTableCell align="right" style={{ color: "red" }}>
                  {row.drawdawn}%
                </StyledTableCell>
                <StyledTableCell align="right">
                  {stars(row.risk)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={() => goToBuy(row.buy)}>BUY</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box fontWeight="fontWeightBold" marginBottom="5px" marginTop="5px">
        * If the price is zero, try again in a minute.
      </Box>
      <Box fontWeight="fontWeightBold" marginBottom="5px" marginTop="5px">
        ** From 2016/05/01 to 2021/04/01. Includes dividends.
      </Box>
      <Box fontWeight="fontWeightBold" marginBottom="10px">
        *** Worst case historical scenario. Buy at top and sell at bottom
      </Box>
    </div>
  );
};
