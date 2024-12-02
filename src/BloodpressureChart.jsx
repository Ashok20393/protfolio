
import React from 'react';
import { Line } from 'react-chartjs-2'; // Assuming you're using Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BloodPressureChart = ({ bloodPressure }) => {
  // Check if bloodPressure is valid (an array) before rendering the chart
  if (!bloodPressure || !Array.isArray(bloodPressure) || bloodPressure.length === 0) {
    return <p>No blood pressure data available.</p>;
  }

  // Prepare data for the chart
  const chartData = {
    labels: bloodPressure.map(item => item.year), // Assuming year is a property in each item
    datasets: [
      {
        label: 'Blood Pressure',
        data: bloodPressure.map(item => item.value), // Assuming value is a property in each item
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Blood Pressure Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default BloodPressureChart;