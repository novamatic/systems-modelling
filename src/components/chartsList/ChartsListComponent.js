import React from 'react';
import './ChartsList.scss';
import Chart from './chart/ChartComponent';

const ChartsList = ({ charts, setCharts }) => {
  return (
    <div className="charts-grid">
      {charts.map((chart) => (
        <Chart key={chart.id} {...chart} setCharts={setCharts} />
      ))}
    </div>
  );
};

export default ChartsList;
