import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Necesidades básicas', 'Ocio', 'Ahorro', 'Vivienda', 'Imprevistos'],
    datasets: [
      {
        label: 'Gastos por categoria',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Lighter background
        borderColor: 'rgba(54, 162, 235, 1)', // Darker border
        borderWidth: 2, // Border thickness
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Start at zero on Y-axis
        grid: {
          color: '#eee', // Grid color
        },
      },
      x: {
        grid: {
          display: false, // Hide grid lines on X-axis
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#333', // Legend text color
          font: {
            size: 16, // Font size
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
