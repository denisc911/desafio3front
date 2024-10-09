import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart = () => {
  const data = {
    labels: ['Coche', 'Entrada Hipoteca', 'Futuro Hijo@'],
    datasets: [
      {
        label: 'Progreso (%)',
        data: [80, 50, 95],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Esto cambia la orientación a horizontal
    scales: {
      x: {
        min: 0,
        max: 100, // Definimos el rango de 0 a 100%
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default HorizontalBarChart;
