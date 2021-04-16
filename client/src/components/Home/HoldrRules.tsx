import { Box, Container, Grow, Grid, Typography } from "@material-ui/core";
export const HoldrRules = () => {
  return (
    <div>
      <Box fontWeight="fontWeightBold">
        For easy investing, please follow these rules:
      </Box>
      <ol style={{ marginLeft: "-25px" }}>
        <li>
          <Typography variant="body1">Hold forever</Typography>
        </li>
        <li>
          <Typography variant="body1">
            Only invest what you can afford to set aside
          </Typography>
        </li>
        <li>
          <Typography variant="body1">Let the market grow.</Typography>
        </li>
        <li>
          <Typography variant="body1">
            Don't worry! The market allways comes back
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Reinvest, be consistent. Adding to your position periodically yields
            amazing results!
          </Typography>
        </li>
      </ol>
    </div>
  );
};
