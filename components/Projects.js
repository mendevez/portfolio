import React from 'react';
import styles from '../styles/projects.module.scss';
import Link from 'next/link';

const projects = () => {
  return (
    <section data-aos="fade-in-out" name="projects" id={styles.projects}>
      <h2 className="section__title">Projects</h2>
      <div className="bottom__line"></div>

      <div className="container">
        <div className={styles.projects__content}>
          <div className={styles.project}>
            <div className={styles.project__image}>
              <img src="mpodcasts2.jpg" alt="Podcasts Project Image" />
            </div>
            <div className={styles.project__text}>
              <div className={styles.project__text__wrap}>
                <a
                  className={styles.project__text__link}
                  href="https://github.com/mendevez/podcasts"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  className={styles.project__text__link}
                  href="https://podcasts-gilt.vercel.app"
                  target="_blank"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.project__image}>
              <img src="CFitness.png" alt="Core Fitness Project Image" />
            </div>
            <div className={styles.project__text}>
              <div className={styles.project__text__wrap}>
                <a
                  className={styles.project__text__link}
                  href="https://github.com/mendevez/corefitness/tree/master/CoreFitness"
                  target="_blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.project__image}>
              <img
                src="expensetracker.jpg"
                alt="Expense Tracker Project Image"
              />
            </div>
            <div className={styles.project__text}>
              <div className={styles.project__text__wrap}>
                <a
                  className={styles.project__text__link}
                  href="https://github.com/mendevez/expensetracker"
                  target="_blank"
                >
                  View Code
                </a>
                <a
                  className={styles.project__text__link}
                  href="https://limitless-temple-79116.herokuapp.com/"
                  target="_blank"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
