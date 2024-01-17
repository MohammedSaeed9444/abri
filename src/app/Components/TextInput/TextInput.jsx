import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css'

const TextInput = ({ placeholder, name, value, onChange }) => {
  return (
    <input
      className={styles.TextInput}  
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
