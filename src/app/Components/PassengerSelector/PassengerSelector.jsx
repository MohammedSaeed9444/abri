"use client"
import React, { useState } from 'react';
import styles from './PassengerSelector.module.css'

export default function PassengerSelector() {
  const [passengerCount, setPassengerCount] = useState(1);

  const handleIncrement = () => {
    setPassengerCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (passengerCount > 1) {
      setPassengerCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className={styles.PassengerSelector}>
      <label className={styles.label}>
        Passengers:
        <input className={styles.Pinput} type="number" value={passengerCount} readOnly />
      </label>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}