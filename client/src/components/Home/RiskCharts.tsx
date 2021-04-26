import { useState, useEffect, useRef } from "react";
import { Button, Paper } from "@material-ui/core";
import CanvasJSReact from "./chartAssets/canvasjs.react";
import "./styles.scss";
import { YoutubeSearchedForSharp } from "@material-ui/icons";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const RiskCharts = (type: any) => {
  const [options, setOptions] = useState({});
  const [
    isCouponCalculationModalOpen,
    setIsCouponCalculationModalOpen,
  ] = useState(false);
  const couponModalRef = useRef<HTMLDivElement>(null);

  const toggleCouponCalculationModal = () => {
    setIsCouponCalculationModalOpen(!isCouponCalculationModalOpen);
  };

  useEffect(() => {
    if (type.type == "1") {
      setOptions({
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Risk 1. 70% $BNDX  + 30% $SPY",
        },
        axisY: {
          title: "Price",
          includeZero: false,
        },
        data: [
          {
            type: "stepLine",
            xValueFormatString: "MMM YYYY",
            markerSize: 5,
            dataPoints: [
              { x: new Date("2016- 05- 01"), y: 100 },
              { x: new Date("2016- 06- 01"), y: 101.24 },
              { x: new Date("2016- 07- 01"), y: 102.85 },
              { x: new Date("2016- 08- 01"), y: 102.87 },
              { x: new Date("2016- 09- 01"), y: 102.65 },
              { x: new Date("2016- 10- 01"), y: 101.14 },
              { x: new Date("2016- 11- 01"), y: 101.3 },
              { x: new Date("2016- 12- 01"), y: 101.45 },
              { x: new Date("2017- 01- 01"), y: 101.34 },
              { x: new Date("2017- 02- 01"), y: 103.17 },
              { x: new Date("2017- 03- 01"), y: 102.99 },
              { x: new Date("2017- 04- 01"), y: 103.6 },
              { x: new Date("2017- 05- 01"), y: 104.53 },
              { x: new Date("2017- 06- 01"), y: 104.15 },
              { x: new Date("2017- 07- 01"), y: 104.91 },
              { x: new Date("2017- 08- 01"), y: 105.6 },
              { x: new Date("2017- 09- 01"), y: 105.79 },
              { x: new Date("2017- 10- 01"), y: 107.01 },
              { x: new Date("2017- 11- 01"), y: 108.23 },
              { x: new Date("2017- 12- 01"), y: 107.74 },
              { x: new Date("2018- 01- 01"), y: 109.5 },
              { x: new Date("2018- 02- 01"), y: 108.15 },
              { x: new Date("2018- 03- 01"), y: 107.67 },
              { x: new Date("2018- 04- 01"), y: 107.7 },
              { x: new Date("2018- 05- 01"), y: 108.4 },
              { x: new Date("2018- 06- 01"), y: 108.81 },
              { x: new Date("2018- 07- 01"), y: 110.28 },
              { x: new Date("2018- 08- 01"), y: 111.54 },
              { x: new Date("2018- 09- 01"), y: 111.37 },
              { x: new Date("2018- 10- 01"), y: 108.49 },
              { x: new Date("2018- 11- 01"), y: 109.5 },
              { x: new Date("2018- 12- 01"), y: 105.17 },
              { x: new Date("2019- 01- 01"), y: 108.72 },
              { x: new Date("2019- 02- 01"), y: 110.05 },
              { x: new Date("2019- 03- 01"), y: 111.77 },
              { x: new Date("2019- 04- 01"), y: 113.47 },
              { x: new Date("2019- 05- 01"), y: 111.63 },
              { x: new Date("2019- 06- 01"), y: 115.23 },
              { x: new Date("2019- 07- 01"), y: 116.71 },
              { x: new Date("2019- 08- 01"), y: 117.49 },
              { x: new Date("2019- 09- 01"), y: 117.73 },
              { x: new Date("2019- 10- 01"), y: 118.23 },
              { x: new Date("2019- 11- 01"), y: 119.38 },
              { x: new Date("2019- 12- 01"), y: 118.43 },
              { x: new Date("2020- 01- 01"), y: 119.79 },
              { x: new Date("2020- 02- 01"), y: 116.58 },
              { x: new Date("2020- 03- 01"), y: 108.86 },
              { x: new Date("2020- 04- 01"), y: 114.84 },
              { x: new Date("2020- 05- 01"), y: 117.07 },
              { x: new Date("2020- 06- 01"), y: 117.98 },
              { x: new Date("2020- 07- 01"), y: 121.21 },
              { x: new Date("2020- 08- 01"), y: 123.84 },
              { x: new Date("2020- 09- 01"), y: 122.36 },
              { x: new Date("2020- 10- 01"), y: 121.36 },
              { x: new Date("2020- 11- 01"), y: 126.66 },
              { x: new Date("2020- 12- 01"), y: 128.39 },
              { x: new Date("2021- 01- 01"), y: 127.37 },
              { x: new Date("2021- 02- 01"), y: 127.55 },
              { x: new Date("2021- 03- 01"), y: 129.77 },
              { x: new Date("2021- 04- 01"), y: 131.92 },
            ],
          },
        ],
      });
    }

    if (type.type == "3") {
      setOptions({
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: `Risk 3. 100% $VT`,
        },
        axisY: {
          title: "Price",
          includeZero: false,
        },
        data: [
          {
            type: "stepLine",
            xValueFormatString: "MMM YYYY",
            markerSize: 5,
            dataPoints: [
              { x: new Date("2016- 05- 01"), y: 100 },
              { x: new Date("2016- 06- 01"), y: 99.011 },
              { x: new Date("2016- 07- 01"), y: 103.1 },
              { x: new Date("2016- 08- 01"), y: 103.47 },
              { x: new Date("2016- 09- 01"), y: 103.75 },
              { x: new Date("2016- 10- 01"), y: 101.7 },
              { x: new Date("2016- 11- 01"), y: 102.91 },
              { x: new Date("2016- 12- 01"), y: 104.0 },
              { x: new Date("2017- 01- 01"), y: 107.12 },
              { x: new Date("2017- 02- 01"), y: 110.0 },
              { x: new Date("2017- 03- 01"), y: 111.2 },
              { x: new Date("2017- 04- 01"), y: 113.0 },
              { x: new Date("2017- 05- 01"), y: 115.2 },
              { x: new Date("2017- 06- 01"), y: 115.14 },
              { x: new Date("2017- 07- 01"), y: 118.19 },
              { x: new Date("2017- 08- 01"), y: 118.68 },
              { x: new Date("2017- 09- 01"), y: 120.57 },
              { x: new Date("2017- 10- 01"), y: 123.12 },
              { x: new Date("2017- 11- 01"), y: 125.45 },
              { x: new Date("2017- 12- 01"), y: 126.61 },
              { x: new Date("2018- 01- 01"), y: 133.55 },
              { x: new Date("2018- 02- 01"), y: 127.62 },
              { x: new Date("2018- 03- 01"), y: 125.54 },
              { x: new Date("2018- 04- 01"), y: 126.0 },
              { x: new Date("2018- 05- 01"), y: 126.78 },
              { x: new Date("2018- 06- 01"), y: 125.09 },
              { x: new Date("2018- 07- 01"), y: 128.69 },
              { x: new Date("2018- 08- 01"), y: 129.8 },
              { x: new Date("2018- 09- 01"), y: 129.29 },
              { x: new Date("2018- 10- 01"), y: 119.18 },
              { x: new Date("2018- 11- 01"), y: 121.2 },
              { x: new Date("2018- 12- 01"), y: 111.61 },
              { x: new Date("2019- 01- 01"), y: 120.52 },
              { x: new Date("2019- 02- 01"), y: 123.92 },
              { x: new Date("2019- 03- 01"), y: 124.75 },
              { x: new Date("2019- 04- 01"), y: 129.08 },
              { x: new Date("2019- 05- 01"), y: 121.38 },
              { x: new Date("2019- 06- 01"), y: 128.15 },
              { x: new Date("2019- 07- 01"), y: 128.15 },
              { x: new Date("2019- 08- 01"), y: 125.45 },
              { x: new Date("2019- 09- 01"), y: 127.57 },
              { x: new Date("2019- 10- 01"), y: 131.13 },
              { x: new Date("2019- 11- 01"), y: 134.49 },
              { x: new Date("2019- 12- 01"), y: 138.09 },
              { x: new Date("2020- 01- 01"), y: 135.94 },
              { x: new Date("2020- 02- 01"), y: 126.12 },
              { x: new Date("2020- 03- 01"), y: 107.07 },
              { x: new Date("2020- 04- 01"), y: 118.17 },
              { x: new Date("2020- 05- 01"), y: 124.33 },
              { x: new Date("2020- 06- 01"), y: 127.53 },
              { x: new Date("2020- 07- 01"), y: 134.28 },
              { x: new Date("2020- 08- 01"), y: 142.35 },
              { x: new Date("2020- 09- 01"), y: 137.49 },
              { x: new Date("2020- 10- 01"), y: 134.68 },
              { x: new Date("2020- 11- 01"), y: 151.33 },
              { x: new Date("2020- 12- 01"), y: 157.85 },
              { x: new Date("2021- 01- 01"), y: 157.49 },
              { x: new Date("2021- 02- 01"), y: 161.7 },
              { x: new Date("2021- 03- 01"), y: 165.88 },
              { x: new Date("2021- 04- 01"), y: 173.53 },
            ],
          },
        ],
      });
    }

    if (type.type == "5") {
      setOptions({
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Risk 5. 50% $TQQQ  + 50% $UPRO",
        },
        axisY: {
          title: "Price",
          includeZero: false,
        },
        data: [
          {
            type: "stepLine",
            xValueFormatString: "MMM YYYY",
            markerSize: 5,
            dataPoints: [
              { x: new Date("2016- 05- 01"), y: 100.0 },
              { x: new Date("2016- 06- 01"), y: 95.92 },
              { x: new Date("2016- 07- 01"), y: 111.85 },
              { x: new Date("2016- 08- 01"), y: 113.6 },
              { x: new Date("2016- 09- 01"), y: 116.66 },
              { x: new Date("2016- 10- 01"), y: 110.73 },
              { x: new Date("2016- 11- 01"), y: 117.12 },
              { x: new Date("2016- 12- 01"), y: 122.11 },
              { x: new Date("2017- 01- 01"), y: 134.84 },
              { x: new Date("2017- 02- 01"), y: 151.95 },
              { x: new Date("2017- 03- 01"), y: 156.3 },
              { x: new Date("2017- 04- 01"), y: 165.1 },
              { x: new Date("2017- 05- 01"), y: 178.27 },
              { x: new Date("2017- 06- 01"), y: 171.22 },
              { x: new Date("2017- 07- 01"), y: 187.53 },
              { x: new Date("2017- 08- 01"), y: 193.01 },
              { x: new Date("2017- 09- 01"), y: 196.53 },
              { x: new Date("2017- 10- 01"), y: 217.52 },
              { x: new Date("2017- 11- 01"), y: 232.63 },
              { x: new Date("2017- 12- 01"), y: 237.68 },
              { x: new Date("2018- 01- 01"), y: 293.57 },
              { x: new Date("2018- 02- 01"), y: 266.33 },
              { x: new Date("2018- 03- 01"), y: 235.6 },
              { x: new Date("2018- 04- 01"), y: 234.89 },
              { x: new Date("2018- 05- 01"), y: 264.52 },
              { x: new Date("2018- 06- 01"), y: 269.25 },
              { x: new Date("2018- 07- 01"), y: 292.95 },
              { x: new Date("2018- 08- 01"), y: 334.76 },
              { x: new Date("2018- 09- 01"), y: 332.87 },
              { x: new Date("2018- 10- 01"), y: 251.79 },
              { x: new Date("2018- 11- 01"), y: 251.79 },
              { x: new Date("2018- 12- 01"), y: 184.46 },
              { x: new Date("2019- 01- 01"), y: 231.74 },
              { x: new Date("2019- 02- 01"), y: 252.3 },
              { x: new Date("2019- 03- 01"), y: 273.35 },
              { x: new Date("2019- 04- 01"), y: 313.5 },
              { x: new Date("2019- 05- 01"), y: 244.55 },
              { x: new Date("2019- 06- 01"), y: 298.96 },
              { x: new Date("2019- 07- 01"), y: 314.58 },
              { x: new Date("2019- 08- 01"), y: 291.56 },
              { x: new Date("2019- 09- 01"), y: 301.07 },
              { x: new Date("2019- 10- 01"), y: 330.14 },
              { x: new Date("2019- 11- 01"), y: 368.48 },
              { x: new Date("2019- 12- 01"), y: 405.72 },
              { x: new Date("2020- 01- 01"), y: 424.64 },
              { x: new Date("2020- 02- 01"), y: 340.98 },
              { x: new Date("2020- 03- 01"), y: 198.83 },
              { x: new Date("2020- 04- 01"), y: 285.43 },
              { x: new Date("2020- 05- 01"), y: 334.14 },
              { x: new Date("2020- 06- 01"), y: 379.98 },
              { x: new Date("2020- 07- 01"), y: 459.99 },
              { x: new Date("2020- 08- 01"), y: 606.36 },
              { x: new Date("2020- 09- 01"), y: 501.37 },
              { x: new Date("2020- 10- 01"), y: 452.11 },
              { x: new Date("2020- 11- 01"), y: 609.04 },
              { x: new Date("2020- 12- 01"), y: 694.56 },
              { x: new Date("2021- 01- 01"), y: 685.68 },
              { x: new Date("2021- 02- 01"), y: 691.38 },
              { x: new Date("2021- 03- 01"), y: 726.9 },
              { x: new Date("2021- 04- 01"), y: 838.8 },
            ],
          },
        ],
      });
    }
  }, [type, isCouponCalculationModalOpen]);

  //https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82
  const handleClick = (e: any) => {
    if (couponModalRef?.current?.contains(e.target)) {
      // inside click
      return;
    } // outside click
    setIsCouponCalculationModalOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick); // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods
  return (
    <div>
      <h1>Price chart***</h1>
      {options && (
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      )}
      <Button
        style={{ marginTop: "10px" }}
        onClick={toggleCouponCalculationModal}
      >
        ***How is coupon price calculated?
      </Button>
      {isCouponCalculationModalOpen && (
        <Paper
          elevation={3}
          className="coupon-paper-calculation"
          ref={couponModalRef}
        >
          {type.type == "1" && (
            <div style={{ padding: "10px 20px" }}>
              <p>
                The price of the coupon is referenced to 70$USD of{" "}
                <a
                  target="_blank"
                  href="https://www.tradingview.com/chart/?symbol=NASDAQ%3ABNDX"
                >
                  $BNDX
                </a>{" "}
                Plus 30$USD of{" "}
                <a
                  target="_blank"
                  href="https://www.tradingview.com/chart/?symbol=AMEX%3ASPY"
                >
                  $SPY
                </a>{" "}
                bought at the open of June 1 2016.{" "}
              </p>
              <p>
                The price of $SPY in June 1st 2016 was 210. And we bought
                (30/210) 0.143 shares.
              </p>
              <p>
                The price of $BNDX in June 1st 2016 was 54.7. And we bought
                (70/54.7) 1.28 shares.
              </p>

              <p>
                Finally, to get the price at any point in time, multiply the
                amount of shares of each ticker ($SPY is a ticker) by its price.
              </p>
              <p>
                {" "}
                Eg. In april 2021 $SPY = 411.45 and $BNDX = 57.11. So the price
                is: 0.143 * 411.45 + 1.28*57.11 = 131.92!
              </p>
            </div>
          )}
          {type.type == "3" && (
            <div style={{ padding: "10px 20px" }}>
              <p>
                The price of the coupon is referenced to 100$USD of{" "}
                <a
                  target="_blank"
                  href="https://www.tradingview.com/symbols/AMEX-VT/"
                >
                  $VT
                </a>{" "}
                bought at the open of June 1 2016.{" "}
              </p>
              <p>
                The price of $VT in June 1st 2016 was 58.65 And we bought
                (100/58.65) 1.705 shares.
              </p>
              <p>
                Finally, to get the price at any point in time, multiply the
                amount of shares of the ticker ($VT is a ticker) by its
                price.{" "}
              </p>
              <p>
                Eg. In april 2021 $VT = 101.78 is:  1.705 * 101.78 = 173.54!
              </p>
            </div>
          )}
          {type.type == "5" && (
            <div style={{ padding: "10px 20px" }}>
              <p>
                The price of the coupon is referenced to 50$USD of{" "}
                <a
                  target="_blank"
                  href="https://www.tradingview.com/symbols/NASDAQ-TQQQ/"
                >
                  $TQQQ
                </a>{" "}
                Plus 50$USD of{" "}
                <a
                  target="_blank"
                  href="https://www.tradingview.com/symbols/AMEX-UPRO/"
                >
                  $UPRO
                </a>{" "}
                bought at the open of June 1 2016.{" "}
              </p>
              <p>
                The price of $TQQQ in June 1st 2016 was 8.7. And we bought
                (50/8.7) 5.742 shares.
              </p>
              <p>
                The price of $UPRO in June 1st 2016 was 22.26. And we bought
                (50/22.26) 2.246 shares.
              </p>

              <p>
                Finally, to get the price at any point in time, multiply the
                amount of shares of each ticker ($SPY is a ticker) by its price.
              </p>
              <p>
                Eg. In april 2021 $TQQQ = 106.63 and $UPRO = 100.87. So the
                price is: 5.742 * 106.63 + 2.246*100.87 = 838.8!
              </p>
            </div>
          )}
        </Paper>
      )}
    </div>
  );
};
