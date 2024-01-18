import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Container from '../Components/Container/Container'
import SearchForm from '../Components/SearchForm/SearchForm'
import styles from './page.module.css'
import Section from '../Components/Section/Section'

export default function SearchPage() {
  return (
    <div>
        <Navbar></Navbar>
        <Container>
            <div className={styles.TitelSearch}>
                <h1>Where do you want to go?</h1>
            </div>
            <SearchForm></SearchForm>
        </Container>
    </div>
  )
}
