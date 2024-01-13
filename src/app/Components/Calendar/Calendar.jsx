"use client"

import React, { useState } from 'react';
import styles from './Calendar.module.css';

export default function TravelForm() {
  const [date, setDate] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleData = () => {
    console.log('Date:', date);
  };

  return (
    <div>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
    </div>
  );
}
