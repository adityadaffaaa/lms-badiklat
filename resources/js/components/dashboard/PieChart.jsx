import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const data = {
    labels: ["Respon Chat", "Modul", "Quiz"],
    datasets: [
      {
        label: "Peserta",
        data: [300, 50, 100],
        backgroundColor: ["#023E8A", "#0077B6", "#0096C7"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    aspectRatio: 4,
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="pie-chart-overview flex justify-center w-full ">
      <div className="max-w-3xl">
        <Pie height={260} width={260} data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
