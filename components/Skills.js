import styles from '../styles/skills.module.scss';
import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <section name="skills" id={styles.skills}>
      <h2 data-aos="zoom-in-left" className="section__title">
        Skills
      </h2>
      <div data-aos="zoom-in-left" className="bottom__line"></div>
      <div className="container">
        <div data-aos="zoom-out" className={styles.skills__content}>
          <div className={styles.skills__content__text}>
            <h2 className={styles.list__title}>Languages</h2>
            <div className={styles.skills__list}>
              <div className={styles.skill__name}>JavaScript</div>
              <div className={styles.skill__name}>TypeScript</div>
              <div className={styles.skill__name}>C#</div>
              <div className={styles.skill__name}>SQL</div>
              <div className={styles.skill__name}>HTML</div>
              <div className={styles.skill__name}>CSS</div>
            </div>
            <h2 className={styles.list__title}>Frameworks</h2>
            <div className={styles.skills__list}>
              <span className={styles.skill__name}>React</span>
              <span className={styles.skill__name}>Node</span>
              <span className={styles.skill__name}>Express</span>
              <span className={styles.skill__name}>Nest</span>
              <span className={styles.skill__name}>ASP.NET Core</span>
            </div>
            <h2 className={styles.list__title}>Other</h2>
            <div className={styles.skills__list}>
              <span className={styles.skill__name}>Git</span>
              <span className={styles.skill__name}>VSCode</span>
              <span className={styles.skill__name}>Visual Studio</span>
              <span className={styles.skill__name}>MongoDB</span>
            </div>
          </div>
          <Image
            src="/skills.jpg"
            width={500}
            height={350}
            className={styles.skills__content__image}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Skills;
