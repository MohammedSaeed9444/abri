
import Artical from './Components/Artical/Artical'
import Container from './Components/Container/container'
import FQA from './Components/FQA/FQA'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import SearchForm from './Components/SearchForm/SearchForm'
import Section from './Components/Section/Section'
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
        <Artical></Artical>
      </Container>
      <Section></Section>
      <FQA></FQA>
      <Footer></Footer>

    </main>
  )
}
