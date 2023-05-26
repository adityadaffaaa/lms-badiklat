import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

import { Bar } from "react-chartjs-2";

import React from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const BarChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      { label: "Lorem", data: [10, 9, 4, 9, 10, 6, 8], backgroundColor: "#0096C7", borderRadius: 4 },
      { label: "Lorem", data: [9, 6, 6, 9, 8, 6, 7], backgroundColor: "#99D5E9", borderRadius: 4 },
    ],
  };

  const options = {
    aspectRatio: 4,
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex justify-center  w-full">
      <div className="max-w-3xl">
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
};

export default BarChart;
