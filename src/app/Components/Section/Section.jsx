import React from 'react'
import styles from './Section.module.css'
import Container from '../Container/Container'
import Link from 'next/link'

export default function Section() {
  return (
    <div className={styles.Section}>
        <Container>
          <div className={styles.TitelSection}>
            <h2>Where do you want a ride to?</h2>
          </div>
          <div className={styles.PapulerTrip}>
            <ul className={styles.UlPapulerTrip}>
                <li>
                    <Link href={'/'}>Baghdad → Erbil</Link>
                </li>
                <li>
                    <Link href={'/'}>Baghdad → Basrah</Link>
                </li>
                <li>
                    <Link href={'/'}>Baghdad → Mosul</Link>
                </li>
            </ul>
          </div>
        </Container>
    </div>
  )
}
