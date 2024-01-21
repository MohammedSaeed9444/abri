import React from 'react'
import styles from './Footer.module.css'
import Logo from '../Logo/Logo'

export default function Footer() {
  return (
    <div className={styles.Footer}>
        <div>
            <h5>This project is associated with Aon Bootcamp.</h5>
        </div>
        <div>
            <Logo></Logo>
        </div>
    </div>
  )
}
