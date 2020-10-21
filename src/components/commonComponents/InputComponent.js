import React, { useState } from 'react';

const Input = ({ id, value, saveAction, placeholder }) => {
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    e.stopPropagation();
    const inputValue = e.target.value;
    saveAction(inputValue);
  };

  const handleBlur = (e) => (e.target.value === '' ? setActive(false) : null);

  return (
    <div className="field" onClick={() => setActive(true)} onBlur={handleBlur}>
      <input id={id} type="text" value={value} onChange={handleChange} />
      <label className={active ? 'active-label' : ''} htmlFor={id}>
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
