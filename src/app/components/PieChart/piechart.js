"use client";
import React from "react";
import "chart.js/auto";
//import the desired component from the Chart.js library
import { Pie } from "react-chartjs-2";

//construct the data object using the appropriate properties and data set
const pieData = {
  labels: [
    "Utilities",
    "Saving",
    "Investment",
    "Entertainment",
    "Rent",
    "Insurance",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <Pie data={pieData} />;
};

export default PieChart;
