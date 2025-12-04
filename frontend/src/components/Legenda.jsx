import React from "react";
import styles from "../styles/Legenda.module.css";

const Legenda = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Legenda</div>

      <div className={styles.legenda}>

        <div className={styles.legendaLeft}>
          <div className={styles.legendaItem}>
            <div className={`${styles.rectangle} ${styles.green}`}></div>
            <div>UEFA Champions League (competitiefase)</div>
          </div>
          <div className={styles.legendaItem}>
            <div className={`${styles.rectangle} ${styles.black}`}></div>
            <div>UEFA Champions League (3e voorronde)</div>
          </div>
          <div className={styles.legendaItem}>
            <div className={`${styles.rectangle} ${styles.orange}`}></div>
            <div>UEFA Europa League (2e voorronde)</div>
          </div>
        </div>

        <div className={styles.legendaRight}>
          <div className={styles.legendaItem}>
            <div className={`${styles.rectangle} ${styles.blue}`}></div>
            <div>Play-Offs Europees voetbal</div>
          </div>
          <div className={styles.legendaItem}>
            <div className={`${styles.rectangle} ${styles.purple}`}></div>
            <div>Keuken Kampioen Play-Offs</div>
          </div>
          <div className={styles.legendaItem}>
            <div className={`${styles.rectangle} ${styles.red}`}></div>
            <div>Directe degradatie Keuken Kampioen Divisie</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Legenda;
