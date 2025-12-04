import React from 'react'
import Clubs from "./Clubs"
import styles from "../styles/ClubInfo.module.css"

const ClubInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.spacer}></div>
      <Clubs />
    </div>
  )
}

export default ClubInfo