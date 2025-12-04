import React from 'react'
import styles from '../styles/Clubs.module.css'
import { useGlobalContext } from "./Context";

const Clubs = () => {

    const { ranking } = useGlobalContext();

    // console.log("State:", state)
return (
    <>
       <div className={styles.iconBoxWrapper}>
            <div className={styles.clubsIconWrapper}>
                <div className={styles.alleClubs}>Alle deelnemende clubs</div>
                <div className={styles.iconBox}>
                    {ranking && ranking.map((team, index) => {
                        return (
                            <div key={index} className={styles.icon}>
                                <img src={team.team.crest} alt="icon" className={styles.iconPng} />
                                <div className={styles.clubName}>{team.team.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
    )
}

export default Clubs
