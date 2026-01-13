"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
const data = {
  labels: ["June", "July", "August", "September", "October", "November"],
  datasets: [
    {
      label: "Sales",
      data: [12.345, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 99, 132, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};
const BarChart = ({style}) => {
  return (
    <div className={style}>
      <Bar data={data} />
    </div>
  );
};
export default BarChart;
