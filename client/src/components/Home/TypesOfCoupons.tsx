import { useHistory } from "react-router-dom";
import { Box, Button, Container, Grow, Grid, Typography } from "@material-ui/core";
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
  returns: any,
  drawdawn: any,
  risk: any,
  buy: any
) {
  return { name, returns, drawdawn, risk, buy };
}

const rows = [
  createData("Bonds and S&P", 47, 17, 1, "1"),
  createData("Total world market", 89, 40, 3, "3"),
  createData("3x US markets", 723, 75, 5, "5"),
];

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
interface ITypesOfCoupons{
  setCouponType: any;
}

export const TypesOfCoupons: React.FC<ITypesOfCoupons> = ({setCouponType}) => {
  const history = useHistory();
  const classes = useStyles();

  const goToBuy = (couponId: string) => {
    history.push(`/buy/${couponId}`);
  };

  const updateCouponType=(newType: string)=>{
    setCouponType(newType);
  }
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
              <StyledTableCell align="right">5 year return*</StyledTableCell>
              <StyledTableCell align="right">
                5 year maximum loss**
              </StyledTableCell>
              <StyledTableCell align="right">Risk rating</StyledTableCell>
              <StyledTableCell align="right">Buy</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <Button onClick={()=>updateCouponType(row.buy)}>{row.name}</Button>
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
                    <Button onClick={()=>goToBuy(row.buy)}>
                        BUY
                    </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box fontWeight="fontWeightBold" marginBottom="5px" marginTop="5px">
        * From 2016/05/01 to 2021/04/01. Includes dividends. 
      </Box>
      <Box fontWeight="fontWeightBold" marginBottom="10px">
        ** Worst case historical scenario. Buy at top and sell at bottom
      </Box>
      
    </div>
  );
};