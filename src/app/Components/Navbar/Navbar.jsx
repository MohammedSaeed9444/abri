import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import NavList from '../navList/navList'
import Avatar from '../Avatar/Avatar'


export default function Navbar() {
  return (
    <div>
      <div className={styles.Navbar}>
        <Logo />
        <NavList />
        <Avatar />
      </div>
      <div className={styles.NavbarMobile}>
        <Avatar />
        <Logo />
        <p>Se</p>
      </div>
    </div>
  )
}