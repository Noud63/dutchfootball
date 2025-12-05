import React from 'react'
import Clubs from "./Clubs"
import styles from "../styles/ClubInfo.module.css"
import { useGlobalContext } from './Context'

const ClubInfo = () => {

   const { state } = useGlobalContext();
  
      console.log("Teams:", state.teams)
  return (
    <div className={styles.infoContainer}>
      <div className={styles.spacer}></div>
      <Clubs />
    </div>
  )
}

export default ClubInfo