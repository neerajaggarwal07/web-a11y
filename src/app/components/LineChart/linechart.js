"use client";
import React from "react";
import "chart.js/auto";
//import the desired component from the Chart.js library
import {Line} from "react-chartjs-2"; 

//construct the data object using the appropriate properties and data set 
const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
      pointBorderColor: 'blue',
      pointRadius: 1,
      data: [100, 200, 300, 400, 200, 300, 600, 800, 500, 400, 500, 800]
    }
  ]
}

const LineChart = () => {

  return (
    <section className="container-xxl py-5">
    <div className="container">
    <Line data={lineData} />
      </div>
      </section>
    
  )
}

export default LineChart