import React from 'react'
import styles from './Selectr.module.css'


export default function Selectr({ children }) {
  return (
    <div className={styles.ContSelectr}>
        <select className={styles.Selectr}  placeholder="">
            <option value="" disabled selected>{children}
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
  )
}
