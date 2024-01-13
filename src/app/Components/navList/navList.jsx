import styles from './navList.module.css';

export default function NavList() {
  return (
    <div className={styles.navList}>
      <ul className={styles.listA}>
        <li> <a href="/">Home</a> </li>
        <li> <a href="/">How it Works</a> </li>
        <li> <a href="/">About Us</a> </li>
      </ul>
    </div>
  );
}