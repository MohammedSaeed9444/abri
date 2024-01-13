"use client"
import DatePicker from 'sassy-datepicker';

import React from 'react'
import styles from './Calend.module.css'
import { Button } from 'antd';

export default function Calend() {
    const onChange = (date) => {
        console.log(date.toString());
      };
  return (
    <div className={styles.Calend}>
        <Button className={styles.calendButton}>Today</Button>
        {/* <DatePicker onChange={onChange} /> */}
    </div>
  )
}
