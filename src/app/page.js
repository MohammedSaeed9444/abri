"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Artical from "./Components/Artical/Artical";
import Container from "./Components/Container/Container";
import FQA from "./Components/FQA/FQA";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SearchForm from "./Components/SearchForm/SearchForm";
import Section from "./Components/Section/Section";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [searchForm, setSearchForm] = useState({
    leavingFrom: "",
    goingTo: "",
    searchDate: null,
    numberPassengers: 1,
  });

  const router = useRouter();

  const onSearchFormChange = (e) => {
    const { name, value } = e.target;
    setSearchForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSearch = () => {
    // router.push(`/tickets?q=${searchForm}`);
    router.push(`/Tickets`);
    // Log the searchForm data to the console
    console.log("Search Form Data:", searchForm);

    // Implement the actual search logic using the searchForm state
    // For example: make an API call, update component state, etc.
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.coverImg}>
        <h1 className={styles.GHQ}>Your pick of rides at low prices</h1>
        <Image
          className={styles.img}
          src="/carpool.svg"
          alt="Carpool Image"
          width={200}
          height={200}
        />
      </div>
      <Container>
        <SearchForm
          leavingFrom={searchForm.leavingFrom}
          goingTo={searchForm.goingTo}
          searchDate={searchForm.searchDate}
          numberPassengers={searchForm.numberPassengers}
          onSearchFormChange={onSearchFormChange}
          onSearch={onSearch}
        />
        <Artical />
      </Container>
      <Section />
      <FQA />
      <Footer />
    </main>
  );
}
