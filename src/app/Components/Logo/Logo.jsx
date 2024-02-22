import Link from 'next/link'
import styles from './Logo.module.css'
import Image from 'next/image'


export default function Logo() {
  return (
    <div>
      <Link href={'/'} className={styles.Logo}>
        <div className={styles.Logos}>
          <Image src={'/Group 5.svg'} width={64} height={20}></Image>
          <Image src={'/Group 4.svg'} width={64} height={20}></Image>
        </div>
      </Link>
    </div>
  )
}
