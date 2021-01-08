import React from 'react';
import styles from '../styles/showcase.module.scss';

const Showcase = () => {
  return (
    <section name="showcase" id={styles.showcase}>
      <div className={styles.showcase__content}>
        <div className="container-showcase">
          <h1 className={styles.showcase__title}>
            <span className={styles.showcase__title__highlight}>Hi,</span>
            <br />
            I'm Mende. <br />
            <span className={styles.showcase__title__job}>
              I'm a Software Developer
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
