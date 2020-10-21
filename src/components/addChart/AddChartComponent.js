import React, { useState } from 'react';
import shortid from 'shortid';

import Input from '../commonComponents/InputComponent';

const AddChart = ({ setCharts }) => {
  const [aParam, setAParam] = useState('');
  const [bParam, setBParam] = useState('');
  const [nParam, setNParam] = useState('');
  const [variation, setVariation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newChart = {
      id: shortid.generate(),
      a: +aParam,
      b: +bParam,
      length: +nParam,
      variation: +variation,
    };

    setCharts((charts) => [...charts, newChart]);
  };

  return (
    <form
      autoComplete="off"
      className="add-chart-wrapper"
      onSubmit={handleSubmit}
    >
      <h4>Type parameters of ideal function</h4>
      <div className="parameters-wrapper">
        <Input
          id="a_param"
          value={aParam}
          saveAction={setAParam}
          placeholder="Parameter a"
        />
        <Input
          id="b_param"
          value={bParam}
          saveAction={setBParam}
          placeholder="Parameter b"
        />
      </div>

      <h4>Parameters of generated input and output arrays</h4>
      <div className="parameters-wrapper">
        <Input
          id="n_param"
          value={nParam}
          saveAction={setNParam}
          placeholder="Array length"
        />
        <Input
          id="variation"
          value={variation}
          saveAction={setVariation}
          placeholder="Variation"
        />
      </div>
      <button className="button">Add chart</button>
    </form>
  );
};

export default AddChart;
