import Chart, { ChartData } from "chart.js";
import React, { FC, useEffect, useRef } from "react";

interface Props {
  data: ChartData;
}

const ChartDoughnut: FC<Props> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { current } = chartRef;

    if (current) {
      const ctx = current.getContext("2d");

      if (ctx) {
        new Chart(ctx, {
          type: "doughnut",
          data,
          options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
              position: "bottom"
            }
          }
        });
      }
    }
  }, [data]);

  return <canvas width="300" ref={chartRef}></canvas>;
};

export default ChartDoughnut;
