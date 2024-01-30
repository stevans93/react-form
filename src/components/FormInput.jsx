import React, { useState } from 'react';
import './FormInput.css';

function FormInput(props) {
  const {lable, errorMessage, onChange, id, ...inputProps} = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  }

  return (
    <div className='formInput'>
        <label>{lable}</label>
        <input {...inputProps} onChange={onChange} onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)} onBlur={handleFocus} focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput;