import React, { useState, useEffect } from 'react';
import c3 from 'c3';

import { calculateModelElements } from './chart.service';

const Chart = ({ id, a, b, length, variation, setCharts }) => {
  const chartId = id && `chart${id}`;
  const [UArray, setUArray] = useState([]);
  const [YArray, setYArray] = useState([]);
  const [params, setParams] = useState({});

  useEffect(() => {
    const {
      UArray,
      modelYArray,
      modelAParam,
      modelBParam,
      identificationQuality,
    } = calculateModelElements(a, b, length, variation);

    setUArray(UArray);
    setYArray(modelYArray);
    setParams({ modelAParam, modelBParam, identificationQuality });
  }, [a, b, length, variation]);

  useEffect(() => {
    if (UArray.length && YArray.length && Object.keys(params).length) {
      const lineFirstPoint = params.modelAParam + params.modelBParam;
      const lineLastPoint = params.modelAParam * length + params.modelBParam;
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
          ? `Len: ${length}, Var: ${variation},  A: ${params.modelAParam},  B: ${params.modelBParam},  Q: ${params.identificationQuality} `
          : null}
        <span className="remove-chart" onClick={handleremoveChart}>
          Remove chart
        </span>
      </h3>
    </div>
  );
};

export default Chart;
