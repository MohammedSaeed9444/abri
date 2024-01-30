import Link from 'next/link'
import styles from './Logo.module.css'


export default function Logo() {
  return (
    <div>
      <Link href={'/'} className={styles.Logo}>
        <div>Logo</div>
      </Link>
    </div>
  )
}
