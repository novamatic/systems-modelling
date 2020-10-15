import React from 'react';

const AddChart = ({ setCharts }) => {
  return (
    <form className="chart-wrapper">
      <h4>Type parameters of ideal function</h4>
      <div className="parameters-wrapper">
        <div className="field">
          <input id="a_param" type="text" />
          <label htmlFor="a_param">Parameter a</label>
        </div>
        <div className="field">
          <input id="b_param" type="text" />
          <label htmlFor="b_param">Parameter b</label>
        </div>
      </div>
    </form>
  );
};

export default AddChart;
