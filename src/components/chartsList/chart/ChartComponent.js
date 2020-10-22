import React, { useState, useEffect } from 'react';
import c3 from 'c3';

import {
  generateUArray,
  generateYArray,
  calculateParams,
} from './chart.service';

const Chart = ({ id, a, b, length, variation, setCharts }) => {
  const chartId = id && `chart${id}`;
  const [UArray, setUArray] = useState([]);
  const [YArray, setYArray] = useState([]);
  const [params, setParams] = useState({});

  useEffect(() => {
    const temp_UArray = generateUArray(length);
    setUArray(temp_UArray);
    const temp_YArray = generateYArray(length, temp_UArray, variation, a, b);
    setYArray(temp_YArray);
    setParams(calculateParams(temp_UArray, temp_YArray));
  }, [a, b, length, variation]);

  useEffect(() => {
    if (UArray.length && YArray.length && Object.keys(params).length) {
      const lineFirstPoint = params.a + params.b;
      const lineLastPoint = params.a * length + params.b;
      c3.generate({
        bindto: `#${chartId}`,
        size: {
          width: 400,
        },
        data: {
          xs: {
            output: 'input',
            lineOutput: 'lineInput',
          },
          columns: [
            ['input', ...UArray],
            ['output', ...YArray],
            ['lineInput', UArray[0], UArray[UArray.length - 1]],
            ['lineOutput', lineFirstPoint, lineLastPoint],
          ],
          type: 'scatter',
          types: {
            lineOutput: 'line',
          },
        },
        legend: {
          show: false,
        },
      });
    }
  }, [chartId, UArray, YArray, length, params]);

  const handleremoveChart = () =>
    setCharts((prevCharts) =>
      prevCharts.filter((prevChart) => prevChart.id !== id)
    );

  return (
    <div>
      <div id={chartId} style={{ width: '100%', height: '90%' }}></div>
      <h3 className="chart-legend">
        {Object.keys(params).length
          ? `Len: ${length}, Var: ${variation},  A: ${params.a},  B: ${params.b}  `
          : null}
        <span className="remove-chart" onClick={handleremoveChart}>
          Remove chart
        </span>
      </h3>
    </div>
  );
};

export default Chart;
