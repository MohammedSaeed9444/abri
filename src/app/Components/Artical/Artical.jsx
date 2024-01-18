import React from 'react';
import styles from './Artical.module.css';
import Link from 'next/link';


export default function Artical() {
  return (
    <div className={styles.Artical}>
      <div className={styles.ArticalDiv}>
        <div className={styles.ContainerImg}>
          <img src="/Artical1.svg" alt="busBlablacar" className={styles.ArticleImage}></img>
        </div>
        <h3 className={styles.TitelArtical}>Trust who you travel with</h3>
        <p className={styles.PergraphArtical}>We take the time to get to know each of our members and bus partners. We check reviews, profiles, and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.</p>
        <Link href={"/Search"} className={styles.LinkArtical}>Discover our offer</Link>
      </div>
      <div className={styles.ArticalDiv}>
        <div className={styles.ContainerImg}>
          <img src="/Artical2.svg" alt="busBlablacar" className={styles.ArticleImage}></img>
        </div>
        <h3 className={styles.TitelArtical}>Scroll, click, tap and go!</h3>
        <p className={styles.PergraphArtical}>Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.</p>
        <Link href={"/Search"} className={styles.LinkArtical}>Find your travil</Link>
      </div>
    </div>
  );
}
