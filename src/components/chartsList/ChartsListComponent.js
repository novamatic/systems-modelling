import React from 'react';
import './ChartsList.scss';
import Chart from './chart/ChartComponent';

const ChartsList = ({ charts }) => {
  return (
    <div className="charts-grid">
      {charts.map((chart) => (
        <Chart key={chart.id} {...chart} />
      ))}
    </div>
  );
};

export default ChartsList;
