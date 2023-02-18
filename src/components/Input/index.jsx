import React from 'react';
import './styles.css';

const Input = (props) => {
  return (
    <input
      className="input_container"
      value={props.value}
      type={props.number}
      id={props.id}
      name={props.name}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
    />
  );
};

export default Input;
