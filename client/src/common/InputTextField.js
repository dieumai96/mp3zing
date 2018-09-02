import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
const TextFieldInput = ({
  name,
  placeholder,
  value,
  error,
  type,
  onChange,
  icon,
}) => {
  return (
    <div className="inputBox" >
      <input type={type} 
      name={name} 
      placeholder={placeholder} 
      value={value} 
      onChange ={onChange}  
      className = { classnames('form-control',{
        'is-invalid' : error
      })}
      />
      <span><i className={icon} aria-hidden="true"></i></span>
    {error && (<div className="invalid-feedback">(*) {error}</div>)}
    </div>
  )
}
TextFieldInput.propTypes = {
  name : PropTypes.string.isRequired,
  placeholder : PropTypes.string.isRequired,
  value : PropTypes.string.isRequired, 
  error : PropTypes.string,
  type : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
}
export default TextFieldInput;