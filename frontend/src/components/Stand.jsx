import React from "react";
import Loader from "./Loader";
import { useGlobalContext } from "./Context";
import styles from "../styles/Stand.module.css";
import { useLocation } from "react-router-dom";
import Legenda from "./Legenda";

const Stand = () => {
  const { state } = useGlobalContext();

  // console.log("State:", state)

  const location = useLocation();
  const path = location.pathname;

  return (

  <div className={styles.stand}>
    <div className={styles.container2}>
      {path === "/stand" && <div className={styles.spacer}></div>}

      {state.loading ? (
        <Loader />
      ) : (
        <div className={styles.leftRightRow}>
          <div className={styles.round}>De Stand</div>

          <div className={styles.rowWrap}>
            <div className={styles.leftRow}>
              <span className={styles.left}>
                <span className={styles.stats}>
                  <span className={styles.gs}>GS</span>
                  <span className={styles.wgv}>W|G|V</span>
                  <span className={styles.p}>P</span>
                  <span className={styles.vt}>V-T</span>
                </span>
              </span>

              {state.leftRow.map((place, index) => {
                const {
                  team,
                  playedGames,
                  won,
                  draw,
                  lost,
                  points,
                  goalsAgainst,
                  goalsFor,
                } = place;
                return (
                  <div className={styles.teamWrapper} key={index}>
                    <div className={styles.leftTeam}>
                      {index < 2 && (
                        <div
                          className={`${styles.positionColor} ${styles.green}`}
                        ></div>
                      )}
                      {index === 2 && (
                        <div
                          className={`${styles.positionColor} ${styles.black}`}
                        ></div>
                      )}
                      {index === 3 && (
                        <div
                          className={`${styles.positionColor} ${styles.orange}`}
                        ></div>
                      )}
                      {index > 3 && index < 8 && (
                        <div
                          className={`${styles.positionColor} ${styles.blue}`}
                        ></div>
                      )}

                      <div className={styles.position}>{index + 1}</div>
                      <img
                        src={team.crest}
                        alt="logo"
                        className={styles.clubIcon}
                      />
                      <div key={index} className={styles.team}>
                        {team.name}
                      </div>
                    </div>

                    <span className={styles.stats2}>
                      <span className={styles.pg}>{playedGames}</span>
                      <span className={styles.wdl2}>
                        {won}|{draw}|{lost}
                      </span>
                      <span className={styles.points}>{points}</span>
                      <span className={styles.gfga}>
                        {goalsFor}-{goalsAgainst}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className={styles.rightRow}>
              <span className={styles.right}>
                <span className={styles.stats}>
                  <span className={styles.gs}>GS</span>
                  <span className={styles.wgv}>W|G|V</span>
                  <span className={styles.p}>P</span>
                  <span className={styles.vt}>V-T</span>
                </span>
              </span>

              {state.rightRow.map((place, index) => {
                const {
                  team,
                  playedGames,
                  won,
                  draw,
                  lost,
                  points,
                  goalsAgainst,
                  goalsFor,
                } = place;
                return (
                  <div className={styles.teamWrapper} key={index}>
                    <div className={styles.rightTeam}>
                      {index > 6 && index < 9 && (
                        <div className={`${styles.positionColor} ${styles.red}` }></div>
                      )}
                      {index === 6 && (
                        <div className={`${styles.positionColor} ${styles.purple}` }></div>
                      )}
                      <div className={styles.position2}>{index + 10}</div>
                      <img
                        src={team.crest}
                        alt="logo"
                        className={styles.clubIcon}
                      />
                      <div key={index} className={styles.team}>
                        {team.name}
                      </div>
                    </div>

                    <span className={styles.stats2}>
                      <span className={styles.pg}>{playedGames}</span>
                      <span className={styles.wdl2}>
                        {won}|{draw}|{lost}
                      </span>
                      <span className={styles.points}>{points}</span>
                      <span className={styles.gfga}>
                        {goalsFor}-{goalsAgainst}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <Legenda />
        </div>
      )}
    </div>
  </div>

    
  );
};

export default Stand;
