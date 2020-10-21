import React, { useState, useEffect } from 'react';
import c3 from 'c3';

import { generateUArray, generateYArray } from './chart.service';

const Chart = ({ id, a, b, length, variation }) => {
  const chartId = id && `chart${id}`;
  const [UArray, setUArray] = useState([]);
  const [YArray, setYArray] = useState([]);

  useEffect(() => {
    const temp_UArray = generateUArray(length);
    setUArray(temp_UArray);
    setYArray(generateYArray(length, temp_UArray, variation, a, b));
  }, [a, b, length, variation]);

  useEffect(() => {
    if (UArray.length && YArray.length) {
      c3.generate({
        bindto: `#${chartId}`,
        size: {
          width: 400,
        },
        data: {
          xs: {
            output: 'input',
          },
          columns: [
            ['input', ...UArray],
            ['output', ...YArray],
          ],
          type: 'scatter',
        },
      });
    }
  }, [chartId, UArray, YArray]);
  return <div id={chartId} style={{ width: '100%', height: '100%' }}></div>;
};

export default Chart;
