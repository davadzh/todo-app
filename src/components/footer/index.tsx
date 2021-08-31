import React from 'react';
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      David Adzhamyan, {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;