import React from 'react'
import styles from './FQA.module.css'
import Container from '../Container/Container'

export default function FQA() {
  return (
    <div className={styles.FQA}>
        <Container>
            <div className={styles.TitleFQA}>
                <h1>FQA</h1>
            </div>
            <ul className={styles.ulFQA}>
                <li>
                    <h4>How do I book a ride on Abri?</h4>
                    <div>
                        <p>Its quick and easy to book a ride online! Simply tell us<br></br> your destination, which day you would like to travel and the number of passengers travelling. Click on Search to find the most convenient ride for you. Just like that you can book a ticket on Abri.</p>
                    </div>
                </li>
                <li>
                    <h4>How much does it cost to travel?</h4>
                    <div>
                        <p>Travelling is more affordable than most other transport options. On Abri we want to offer the best prices, so that you can travel for less. Search for your next ride now to discover all</p>
                    </div>
                </li>
            </ul>
        </Container>
    </div>
  )
}
