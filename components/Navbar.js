import React from 'react';
import styles from '../styles/nav.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav id={styles.nav}>
      <h1>
        <Link href="/#showcase">
          <a href="" className={styles.website__title}> MV </a>
        </Link>
      </h1>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>
          <Link className={styles.nav__list__link} href="/#about">
            <a className={styles.nav__list__link} href="">
              About
            </a>
          </Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="#skills">
            <a className={styles.nav__list__link} href="/#skills">
              Skills
            </a>
          </Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="#projects">
            <a className={styles.nav__list__link} href="#projects">
              Projects
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
