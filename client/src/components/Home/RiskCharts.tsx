import { useState, useEffect } from "react";
import { Box, Container, Grow, Grid, Typography } from "@material-ui/core";
import CanvasJSReact from "./chartAssets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const RiskCharts = (type: any) => {
  console.log("chart type: ", type.type);
  const [options, setOptions] = useState({});

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

    if (type.type == "2") {
      setOptions({
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: `Risk 1. 70% $ITOT  + 30% $AAXJ`,
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
              { x: new Date("2016- 06- 01"), y: 100.53 },
              { x: new Date("2016- 07- 01"), y: 104.96 },
              { x: new Date("2016- 08- 01"), y: 105.76 },
              { x: new Date("2016- 09- 01"), y: 106.61 },
              { x: new Date("2016- 10- 01"), y: 104.05 },
              { x: new Date("2016- 11- 01"), y: 106.15 },
              { x: new Date("2016- 12- 01"), y: 106.04 },
              { x: new Date("2017- 01- 01"), y: 109.83 },
              { x: new Date("2017- 02- 01"), y: 113.49 },
              { x: new Date("2017- 03- 01"), y: 114.56 },
              { x: new Date("2017- 04- 01"), y: 116.06 },
              { x: new Date("2017- 05- 01"), y: 118.35 },
              { x: new Date("2017- 06- 01"), y: 119.13 },
              { x: new Date("2017- 07- 01"), y: 122.58 },
              { x: new Date("2017- 08- 01"), y: 123.37 },
              { x: new Date("2017- 09- 01"), y: 125.05 },
              { x: new Date("2017- 10- 01"), y: 128.68 },
              { x: new Date("2017- 11- 01"), y: 131.48 },
              { x: new Date("2017- 12- 01"), y: 132.48 },
              { x: new Date("2018- 01- 01"), y: 140.25 },
              { x: new Date("2018- 02- 01"), y: 133.84 },
              { x: new Date("2018- 03- 01"), y: 132.19 },
              { x: new Date("2018- 04- 01"), y: 131.75 },
              { x: new Date("2018- 05- 01"), y: 134.1 },
              { x: new Date("2018- 06- 01"), y: 131.91 },
              { x: new Date("2018- 07- 01"), y: 135.7 },
              { x: new Date("2018- 08- 01"), y: 138.09 },
              { x: new Date("2018- 09- 01"), y: 137.33 },
              { x: new Date("2018- 10- 01"), y: 125.87 },
              { x: new Date("2018- 11- 01"), y: 129.72 },
              { x: new Date("2018- 12- 01"), y: 118.89 },
              { x: new Date("2019- 01- 01"), y: 128.97 },
              { x: new Date("2019- 02- 01"), y: 132.3 },
              { x: new Date("2019- 03- 01"), y: 134.11 },
              { x: new Date("2019- 04- 01"), y: 138.66 },
              { x: new Date("2019- 05- 01"), y: 128.81 },
              { x: new Date("2019- 06- 01"), y: 136.87 },
              { x: new Date("2019- 07- 01"), y: 137.03 },
              { x: new Date("2019- 08- 01"), y: 133.72 },
              { x: new Date("2019- 09- 01"), y: 135.56 },
              { x: new Date("2019- 10- 01"), y: 139.39 },
              { x: new Date("2019- 11- 01"), y: 143.35 },
              { x: new Date("2019- 12- 01"), y: 147.83 },
              { x: new Date("2020- 01- 01"), y: 145.08 },
              { x: new Date("2020- 02- 01"), y: 136.23 },
              { x: new Date("2020- 03- 01"), y: 117.41 },
              { x: new Date("2020- 04- 01"), y: 130.87 },
              { x: new Date("2020- 05- 01"), y: 136.21 },
              { x: new Date("2020- 06- 01"), y: 140.64 },
              { x: new Date("2020- 07- 01"), y: 149.69 },
              { x: new Date("2020- 08- 01"), y: 158.92 },
              { x: new Date("2020- 09- 01"), y: 154.0 },
              { x: new Date("2020- 10- 01"), y: 152.7 },
              { x: new Date("2020- 11- 01"), y: 169.28 },
              { x: new Date("2020- 12- 01"), y: 176.72 },
              { x: new Date("2021- 01- 01"), y: 178.58 },
              { x: new Date("2021- 02- 01"), y: 183.2 },
              { x: new Date("2021- 03- 01"), y: 186.31 },
              { x: new Date("2021- 04- 01"), y: 191.77 },
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
    <p>***How is coupon price calculated?</p>
    </div>
  );
};
