import React from 'react';
import styles from '../styles/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__content}>
          <h3>Copyright &copy; {new Date().getFullYear()} Mende Vezenkoski</h3>
        </div>
        <div className={styles.footer__links}>
          <a
            className={styles.footer__link}
            target="_blank"
            href="https://www.linkedin.com/in/mende-vezenkoski/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className={styles.footer__link}
            target="_blank"
            href="https://github.com/mendevez"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
