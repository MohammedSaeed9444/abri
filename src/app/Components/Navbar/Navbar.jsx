import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import NavList from '../navList/navList'
import Avatar from '../Avatar/Avatar'
import Link from 'next/link'
import { SearchOutlined} from '@ant-design/icons'

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
        <Link href='/Search'><SearchOutlined /></Link>
      </div>
    </div>
  )
}