"use client";
import React from "react";
import "chart.js/auto";
//import the desired component from the Chart.js library
import { Bar } from "react-chartjs-2";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Products comparison",
    },
  },
};
//construct the data object using the appropriate properties and data set
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const barData = {
  labels,
  datasets: [
    {
      label: "Product 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Product 2",
      data: [25, 79, 30, 21, 65, 85, 90],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const BarChart = () => {
  return (
        <Bar data={barData} />
    
  );
};

export default BarChart;
