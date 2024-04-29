import React from "react";
import { Chart } from "react-google-charts";

export const ChartProvider=()=> {
  const data = [
    ["", "", { role: "style" }],
    ["Pablo", 8.94, "#413ED0"], // RGB value
    ["João", 10.49, "#413ED0"], // English color name
    ["André", 19.3, "#413ED0"],
  ];
  return (
    <Chart chartType="ColumnChart" width="100%" height="300px" data={data} />
  );
}
export const ChartServices=()=> {
  const dataServices = [
    ["", "", { role: "style" }],
    ["Corte", 19.3, "#413ED0"],
    ["Corte & Sombrancelhas", 15.49, "#413ED0"], // English color name
    ["Corte & Barba", 10.49, "#413ED0"], // English color name
    ["Corte & Barba & Sombrancelhas", 10.49, "#413ED0"], // English color name
    ["Barba", 9.3, "#413ED0"],
  ];
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="300px"
      data={dataServices}
    />
  );
}
