import React from 'react';
import styles from './page.module.css';
import Container from '../Components/Container/Container';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

export default function Ticket() {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <div className={styles.Ticket}>
          <div className={styles.Titel}>
            <h2>Sun, 21 January</h2>
          </div>
          <div>
            <div className={styles.From}>
              <div className={styles.TimeFrom}>02:35</div>
              <div className={styles.DesFrom}>Baghdad</div>
            </div>
            <div className={styles.To}>
              <div className={styles.TimeTo}>06:45</div>
              <div className={styles.DesTo}>Erbil</div>
            </div>
            <div className={styles.ContPrice}>
              <div className={styles.Npassenger}>price for 1 passenger</div>
              <div className={styles.Price}>13$</div>
            </div>
            <div className={styles.typeCar}>BMW</div>
          </div>
          <div className={styles.ContBook}>
            <button className={styles.BookButton}>Book</button>
          </div>
        </div>
      <div className={styles.coverImg}>
        <img className={styles.img} src="/Passengers.svg" alt="Passengers" />
      </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}