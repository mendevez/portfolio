import React from 'react';
import styles from '../styles/about.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section name="about" id={styles.about}>
      <h2 data-aos="zoom-in-right" className="section__title">
        About
      </h2>
      <div data-aos="zoom-in-right" className="bottom__line"></div>
      <div className="container">
        <div data-aos="zoom-out" className={styles.about__content}>
          <img
            className={styles.about__content__image}
            src="/about.jpg"
  
            alt="About Picture"
          />
          <div className={styles.about__content__text}>
            <h2 className={styles.about__content__title}>Who I am</h2>
            <h3 className={styles.about__content__job}>
              Software Developer based in Sydney
            </h3>
            <p className={styles.about__content__description}>
              I am a full-stack software developer specializing in JavaScript
              technologies including React and Node. 
            </p>
            <div className={styles.about__content__links}>
              <a className={styles.about__content__link} href="https://www.linkedin.com/in/mende-vezenkoski/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className={styles.about__content__link} href="https://github.com/mendevez">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
