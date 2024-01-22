"use client"
import styles from './Avatar.module.css';
import React, { useState } from 'react';
import Link from 'next/link';

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
            <li><Link href={'/'}>Setting</Link></li>
            <li><Link href='/Login'>Log in</Link></li>
            <li><Link href="/SignUp">Sing up</Link></li>
          </ul>
        </div>
      )}

    </div>
  )
}
