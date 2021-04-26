import axios from "axios";

// TickerInfo("SPY", "2021-04-23", setTickerData, tickerData);
export const TickerInfo = (
  ticker: any,
  date: string,
  setter?: any,
  setterData?: any
) => {
  const params = {
    api_key: "pJ0sNEIWKaKvZCHBlrc2gr17No1bSRTc",
  };
  axios
    .get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${date}/${date}?apiKey=${params.api_key}`, {})
    .then((response) => {
      const apiResponse = response.data;
      if (Array.isArray(apiResponse.results)) {
        apiResponse.results.forEach((stockData:any) => {
          console.log(
            `Ticker ${apiResponse.ticker}`,
            `has a close of ${stockData.c}, on ${date}`
          );
          setter([...setterData, {"ticker": apiResponse.ticker, "closePrice": stockData.c, "date":date}]);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};