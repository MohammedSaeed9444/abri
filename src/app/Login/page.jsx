"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import Container from '../Components/Container/Container';
import Navbar from '../Components/Navbar/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    // You can add your authentication logic here, such as making an API request to a server
    // For simplicity, let's assume successful login for any email and password combination
    if (email === 'example@example.com' && password === 'password') {
      setLoggedIn(true);
      setError(null);
    } else {
      setLoggedIn(false);
      setError('Invalid email or password');
    }
  };

  

  return (
    <div>
      <Navbar />
      <Container>
        <div className={styles.Login}>
          <div>
            <h2 className={styles.Titel}>Login</h2>
          </div>
          <form className={styles.Form}>
            <div>
              <label className={styles.Label}>Email:</label>
              <input
              className={styles.Input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className={styles.Label}>Password:</label>
              <input
                className={styles.Input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={styles.SubmitButton} type="button" onClick={handleLogin}>
              Log in
            </button>
          </form>
          {error && <p className={styles.error}>{error}</p>}
          {isLoggedIn && <p className={styles.success}>Login successful!</p>}
        </div>
      </Container>
    </div>
  );
}

