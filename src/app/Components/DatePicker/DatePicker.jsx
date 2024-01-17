"use client"
import React from 'react';
import styles from './DatePicker.module.css';

const DatePicker = ({ selectedDate, onDateChange }) => {
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    onDateChange(newDate);
  };

  const todayDateString = new Date().toISOString().split('T')[0];

  return (
    <div className={styles.DatePicker}>
      <input
        className={styles.DateInput}
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        min={todayDateString}
        
      />
    </div>
  );
};

export default DatePicker;