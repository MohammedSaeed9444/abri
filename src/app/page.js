
import Container from './Components/Container/container'
import Navbar from './Components/Navbar/Navbar'
import SearchForm from './Components/SearchForm/SearchForm'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.coverImg}>
        <img className={styles.img} src="/carpool.svg" alt="Carpool Image" />
      </div>
      <Container>
        <SearchForm></SearchForm>
      </Container>
    </main>
  )
}
