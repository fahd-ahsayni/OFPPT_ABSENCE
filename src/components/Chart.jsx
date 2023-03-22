import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

export default function Charts() {
  const [state, setState] = useState({
    options: {
      colors: ["#16a34a", "#2563eb"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "DD201",
          "DD202",
          "DD203",
          "DI201",
          "DI202",
          "GE201",
          "GE202",
          "GE203",
        ],
      },
    },
    series: [
      {
        name: "Absence rates",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Presence rates",
        data: [70, 60, 45, 90, 79, 60, 70, 61],
      },
    ],
  });
  return (
    <>
      <div className="app">
        <div className="row">
          <div className="mixed-chart p-24">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
            />
          </div>
          <div
            className="chart flex items-center justify-center"
          >
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="500"
            />
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    </>
  );
}
