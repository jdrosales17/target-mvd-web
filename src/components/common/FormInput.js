import React, { Fragment } from 'react';
import { string, func } from 'prop-types';

const FormInput = (props) => {
  const { name, label, placeholder, type, value, handleInputChange } = props;

  return (
    <Fragment>
      <label className="form-input-label" htmlFor={name}>{label}</label>
      <input
        className="form-input"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleInputChange}
      />
    </Fragment>
  );
};

FormInput.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  placeholder: string,
  type: string.isRequired,
  value: string.isRequired,
  handleInputChange: func.isRequired,
};

export default FormInput;
