import React from 'react';
import './styles.css';

const Input = (props) => {
  return (
    <input
      className={`input_container ${props.className}`}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
    />
  );
};

export default Input;
