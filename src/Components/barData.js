import React from "react";
import { Bar } from "react-chartjs-2";
import { Theme } from "../theme";

const state = {
  labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],

  datasets: [
    {
      backgroundColor: Theme.textColor.heading,
      data: [65, 20, 80, 40, 56, 90, 10],
    },
  ],
};

export default class ChartComponent extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Bar
          height={200}
          width={"100%"}
          data={state}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
            showLines: false,
            scales: {
              xAxes: [
                {
                  barThickness: 16,
                  ticks: {
                    fontColor: Theme.textColor.heading,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
