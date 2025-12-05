import React from "react";
//import { useWindowWidth } from 'react-window-size-hooks';
import styles from "../styles/Footer.module.css";
import logo from "../images/eredivisielogo_blue.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.eredivisie}>
        <div className={styles.footerTitleWrapper}>
          <div>
            <img src={logo} alt="Eredivisie Logo" className={styles.logo} />
          </div>
          <div>KNVB Eredivisie 2025-2026</div>
        </div>
      </div>
      <div className={styles.colofon}>
        &copy;webdevelopment by noudvandun
        </div>
    </div>
  );
};

export default Footer;
