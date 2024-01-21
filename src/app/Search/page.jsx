"use client"
import { useState } from 'react';
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Container from '../Components/Container/Container'
import SearchForm from '../Components/SearchForm/SearchForm'
import styles from './page.module.css'
import Section from '../Components/Section/Section'

export default function SearchPage() {


  const [searchForm, setSearchForm] = useState({
    leavingFrom: '',
    goingTo: '',
    searchDate: null,
    numberPassengers: 1,
  });

  const onSearchFormChange = (e) => {
    const { name, value } = e.target;
    setSearchForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSearch = () => {
    console.log('Search Form Data:', searchForm);
  };

  return (
    <div>
        <Navbar></Navbar>
        <Container>
            <div className={styles.TitelSearch}>
                <h1>Where do you want to go?</h1>
            </div>
            <SearchForm
            leavingFrom={searchForm.leavingFrom}
            goingTo={searchForm.goingTo}
            searchDate={searchForm.searchDate}
            numberPassengers={searchForm.numberPassengers}
            onSearchFormChange={onSearchFormChange}
            onSearch={onSearch}
            />
        </Container>
    </div>
  )
}
