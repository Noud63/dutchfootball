import React, { useEffect, useState } from "react";
import Clubs from "./Clubs";
import styles from "../styles/ClubInfo.module.css";
import { useGlobalContext } from "./Context";

const ClubInfo = () => {
  const { state } = useGlobalContext();
  const { teams } = state;

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (Array.isArray(teams) && teams.length > 0) {
      const squadArrays = teams.map((team) => team.squad || []);
      setPlayers(squadArrays);
    }
  }, [teams]);

  console.log("P:", players);

  return (
    <div className={styles.infoContainer}>
      <div className={styles.spacer}></div>
      <Clubs />
      <div className={styles.clubsInfo}>
        {teams &&
          teams.map((team, index) => (
            <div className={styles.team} key={team.name}>
              <div className={styles.teamHeader}>
                <img src={team.crest} alt={team.name} />
                <div>{team.name}</div>
              </div>
              <div className={styles.teamInfo}>
                <div>
                  <span className={styles.teamLabel}>Naam: </span>
                  <span className={styles.teamName}>{team.name}</span>
                </div>
                <div>
                  <span className={styles.teamLabel}>Adres: </span>
                  <span className={styles.teamName}>
                    {team.address.slice(0, -8)}
                  </span>
                </div>
                <div>
                  <span className={styles.teamLabel}>Stadion: </span>
                  <span className={styles.teamName}>{team.venue}</span>
                </div>
                <div>
                  <span className={styles.teamLabel}>Opgericht: </span>
                  <span className={styles.teamName}>{team.founded}</span>
                </div>
                <div>
                  <span className={styles.teamLabel}>Coach: </span>
                  <span className={styles.teamName}>
                    {team.coach.firstName} {team.coach.lastName}
                  </span>
                </div>
                <div>
                  <span className={styles.teamLabel}>Spelers: </span>
                  <div className={styles.teamName}>
                    {players[index]?.map((player) => (
                      <div
                        className={styles.players}
                        key={player.id || player.name}
                      >
                        {player.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClubInfo;
