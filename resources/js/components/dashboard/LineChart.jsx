import React from "react";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Filler
);

export const LineChart = () => {
  const data = {
    labels: ["Pekan 1", "Pekan 2", "Pekan 3", "Pekan 4"],
    datasets: [
      {
        label: "Topik",
        data: [65, 59, 80, 81],
        fill: false,
        borderColor: "#FF9364",
        tension: 0.4,
        pointBackgroundColor: "#FFBA08",
      },
      {
        label: "Threads",
        data: [24, 54, 35, 73],
        fill: true,
        borderColor: "#0096C7",
        tension: 0.4,
        pointBackgroundColor: "#90E0EF",
        backgroundColor: "#90E0EF",
      },
    ],
  };

  const options = {
    plugins: { legend: true },
  };

  return (
    <div className='w-full flex justify-center h-full'>
      <div className='max-w-3xl'>
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default LineChart;
