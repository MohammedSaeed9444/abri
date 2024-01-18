import React from 'react'
import styles from './page.module.css'
import Navbar from '../Components/Navbar/Navbar'
import SearchForm from '../Components/SearchForm/SearchForm'
import Container from '../Components/Container/Container'

export default function Ticket() {
  return (
    <div>
      <Navbar></Navbar>
      <SearchForm></SearchForm>
      <Container>
        <div className={styles.ContainerTicket}>
            <div className={styles.Ticket}>
              <div className={styles.destinations}>
                <div className={styles.From}>
                    <div className={styles.TimeFrom}>02:35</div>
                    <div className={styles.DesFrom}>Baghdad</div>
                </div>
                <div className={styles.To}>
                    <div className={styles.TimeTo}>06:45</div>
                    <div className={styles.DesTo}>Erbil</div>
                </div>
              </div>
              <div className={styles.price}>$13</div>
            </div>


            <div className={styles.Ticket}>
              <div className={styles.destinations}>
                <div className={styles.From}>
                    <div className={styles.TimeFrom}>02:35</div>
                    <div className={styles.DesFrom}>Baghdad</div>
                </div>
                <div className={styles.To}>
                    <div className={styles.TimeTo}>06:45</div>
                    <div className={styles.DesTo}>Erbil</div>
                </div>
              </div>
              <div className={styles.price}>$13</div>
            </div>

            <div className={styles.Ticket}>
              <div className={styles.destinations}>
                <div className={styles.From}>
                    <div className={styles.TimeFrom}>02:35</div>
                    <div className={styles.DesFrom}>Baghdad</div>
                </div>
                <div className={styles.To}>
                    <div className={styles.TimeTo}>06:45</div>
                    <div className={styles.DesTo}>Erbil</div>
                </div>
              </div>
              <div className={styles.price}>$13</div>
            </div>

            <div className={styles.Ticket}>
              <div className={styles.destinations}>
                <div className={styles.From}>
                    <div className={styles.TimeFrom}>02:35</div>
                    <div className={styles.DesFrom}>Baghdad</div>
                </div>
                <div className={styles.To}>
                    <div className={styles.TimeTo}>06:45</div>
                    <div className={styles.DesTo}>Erbil</div>
                </div>
              </div>
              <div className={styles.price}>$13</div>
            </div>

        </div>
      </Container>
    </div>
  )
}
