"use client"
import styles from './Avatar.module.css';
import React, { useState } from 'react';

export default function Avatar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.Avatar} onClick={toggleMenu}>Ava
    
    {isMenuOpen && (
        <div className={styles.Menu}>
          <ul className={styles.MenuList}>
            <li><a>Setting</a></li>
            <li><a>Log in</a></li>
            <li><a>Sing up</a></li>
          </ul>
        </div>
      )}

    </div>
  )
}
