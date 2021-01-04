import React from 'react';
import styles from '../styles/about.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section name="about" id={styles.about}>
      <h2 data-aos="fade-in-out" className="section__title">
        About
      </h2>
      <div data-aos="fade-in-out" className="bottom__line"></div>
      <div className="container">
        <div data-aos="fade-in-out" className={styles.about__content}>
          <img
            className={styles.about__content__image}
            src="/about.jpg"
            alt="About Picture"
          />
          <div className={styles.about__content__text}>
            <h2 className={styles.about__content__title}>Who I am</h2>
            <p className={styles.about__content__description}>
              I am a full-stack software developer based in Sydney, Australia. I
              primarily use JavaScript, React and Node to build my projects. I
              am passionate about all things technology and I enjoy learning new
              technologies to build my projects. Check out some of my projects I
              have built using React, Node and ASP.NET.
            </p>
            <div className={styles.about__content__links}>
              <a
                className={styles.about__content__link}
                href="https://www.linkedin.com/in/mende-vezenkoski/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className={styles.about__content__link}
                href="https://github.com/mendevez"
              >
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
