import React, { useEffect, useCallback, useState } from "react";
import styles from "../styles/Recent.module.css";
import { useGlobalContext } from "./Context";
import { useLocation } from "react-router-dom";
import MatchInfoModal from "./MatchInfoModal";
import lastMatchExpired from "../utils/hasLastMatchExpired";

const Recent = () => {
  const location = useLocation();
  const path = location.pathname;

  const { state, matchDay } = useGlobalContext();

   const [lastGames, setLastGames] = React.useState([]);
  const [program, setProgram] = React.useState([]);
  const [currentMatchDay, setCurrentMatchDay] = useState(matchDay)
  const [id, setId] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
      if(lastMatchExpired(matchDay, state.matchByDay)){
           setCurrentMatchDay(matchDay)
      }else{
        setCurrentMatchDay(matchDay - 1)
      }
  },[matchDay, state.matchByDay])

  // let currentMatchDay = matchDay - 1 ;
  // program.every(match => match.status === "FINISHED" ? currentMatchDay = matchDay : currentMatchDay = matchDay - 1);
  let upcomingMatchDay = currentMatchDay + 1;
  let recent = state.matchByDay.slice(currentMatchDay - 1, currentMatchDay);
  let upcoming = state.matchByDay.slice(upcomingMatchDay - 1, upcomingMatchDay);

  const getLastGames = useCallback(() => {
    for (let games of recent) {
      setLastGames(games);
    }
  }, [recent]);

  const getProgram = useCallback(() => {
    for (let games of upcoming) {
      setProgram(games);
    }
  }, [upcoming]);

  useEffect(() => {
    getLastGames();
    getProgram();
  }, [getLastGames, getProgram]);


  const showMatchInfo = (id) => {
    console.log("Id:", id);
    setId(id);
    setOpenModal(!openModal);
  };

  // const [lastGames, setLastGames] = React.useState([]);
  // const [program, setProgram] = React.useState([]);

  // let currentMatchDay = matchDay
  // program.every(match => match.status === "FINISHED" ? currentMatchDay = matchDay : currentMatchDay = matchDay - 1);
  // let upcomingMatchDay = currentMatchDay + 1;
  // let recent = state.matchByDay.slice(currentMatchDay - 1, currentMatchDay);
  // let upcoming = state.matchByDay.slice(upcomingMatchDay - 1, upcomingMatchDay);

  // const getLastGames = useCallback(() => {
  //    for (let games of recent) {
  //       setLastGames(games);
  //    }
  // }, [recent]);

  // const getProgram = useCallback(() => {
  //    for (let games of upcoming) {
  //       setProgram(games);
  //    }
  // }, [upcoming]);

  // useEffect(() => {
  //    getLastGames();
  //    getProgram();
  // }, [getLastGames, getProgram]);
//   console.log("Timed:", timed);

  return (
    <>
      <div className={styles.container}>
        {path === "/recent" && <div className={styles.spacer}></div>}
        <div className={styles.matches}>
          <div className={styles.gamesnRound}>
            <div className={styles.alleWedstrijden}>Recent gespeeld</div>
            <div className={styles.speelrondes}>
              Speelronde
              <div className={styles.circle}>
                <div className={styles.dayNumber}>{currentMatchDay}</div>
              </div>
            </div>
          </div>

          {lastGames.map((game) => {
            const { homeTeam, awayTeam, score, id } = game;

            return (
              <div className={styles.match} key={id}>
                <div className={styles.teams}>
                  <div className={styles.hometeam}>{homeTeam.name}</div>
                  <div className={styles.scores}>
                    {score.fullTime.home} : {score.fullTime.away}
                  </div>
                  <div className={styles.awayteam}>{awayTeam.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.matches}>
          <div className={styles.gamesnRound}>
            <div className={styles.alleWedstrijden}>Programma</div>
            <div className={styles.speelrondes}>
              Speelronde
              <div className={styles.circle}>
                <div className={styles.dayNumber}>{upcomingMatchDay}</div>
              </div>
            </div>
          </div>

          {program.map((game, index) => {
            const { homeTeam, awayTeam, score, id } = game;

            return (
              <div
                className={styles.match_upcoming}
                key={index}
                onClick={() => showMatchInfo(id)}
              >
                <div className={styles.teams}>
                  <div className={styles.hometeam}>{homeTeam.name}</div>
                  <div className={styles.scores}>
                    {score.fullTime.home} : {score.fullTime.away}
                  </div>
                  <div className={styles.awayteam}>{awayTeam.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {openModal && (
        <MatchInfoModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          program={program}
          showMatchInfo={showMatchInfo}
          ID={id}
        />
      )}
    </>
  );
};

export default Recent;
