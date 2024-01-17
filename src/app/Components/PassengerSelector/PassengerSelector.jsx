"use client"
import React, { useState } from 'react';
import styles from './PassengerSelector.module.css'

const PassengerSelector = ({ passengerCount, onIncrement, onDecrement }) => {
  return (
    <div className={styles.PassengerSelector}>
      <button onClick={onIncrement}>+</button>
      <input className={styles.PassengerInput} type="number" value={passengerCount} readOnly />
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default PassengerSelector;
