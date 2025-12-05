import React from "react";
import goal from "../images/goal.jpg";
import eredivisie65 from "../images/eredivisie65.png";
import goal2 from "../images/goal2.jpg";
import goal2_small from "../images/goal2_small.jpg";
import goal3 from "../images/goal3.jpg";
import goal3_small from "../images/goal3_small.jpg";    
import goal4 from "../images/goal4.jpg";
import goal_small from "../images/goal_small.jpg";
import goal4_small from "../images/goal4_small.jpg";
import Uitslagen from "./Uitslagen";
import Stand from "./Stand";
import Recent from "./Recent";
import styles from "../styles/Home.module.css";
import Clubs from "./Clubs";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { topScorers, season } = useGlobalContext();
  // console.log("Top:", topScorers);

  return (
    <div className={styles.home}>
      <div className={styles.spacer}></div>
      <div className={styles.schaal}>
        <img src={goal3} className={styles.schaalPic} alt="" />
        <img src={goal3_small} className={styles.schaalPic_small} alt="" />
        <div className={styles.ere65}>
          <img src={eredivisie65} alt="" className={styles.eredivisie65} />
        </div>
        <div className={styles.history}>
          Het ontstaan van de Eredivisie gaat ver terug in de tijd. De voorloper
          van de Eredivisie was de kampioenscompetitie. Al sinds 1888 wordt er
          officieus gestreden om het Nederlands kampioenschap. Met ingang van
          het seizoen 1898/'99 werd dit officieel, waarna Concordia uit
          Rotterdam zich als eerste landskampioen van Nederland mocht noemen. Na
          de introductie van het betaald voetbal in 1954 werd twee jaar later de
          Eredivisie officieel opgericht. Zodoende zijn sinds 1956 de sterkste
          clubs van Nederland verenigd in één landelijke competitie.
          <br />
          <Link to="/history" style={{ textDecoration: "none" }}>
            <span className={styles.leeshiermeer}>Lees hier meer.......</span>
          </Link>
        </div>
      </div>

      <div className={styles.history2}>
        <div className={styles.historyText}>
          <div className={styles.stukje}>Geschiedenis</div>
          Het ontstaan van de Eredivisie gaat ver terug in de tijd. De voorloper
          van de Eredivisie was de kampioenscompetitie. Al sinds 1888 wordt er
          officieus gestreden om het Nederlands kampioenschap. Met ingang van
          het seizoen 1898/'99 werd dit officieel, waarna Concordia uit
          Rotterdam zich als eerste landskampioen van Nederland mocht noemen. Na
          de introductie van het betaald voetbal in 1954 werd twee jaar later de
          Eredivisie officieel opgericht. Zodoende zijn sinds 1956 de sterkste
          clubs van Nederland verenigd in één landelijke competitie.
          <br />
          <Link to="/history" style={{ textDecoration: "none" }}>
            <span className={styles.leeshiermeer}>Lees hier meer.......</span>
          </Link>
        </div>
      </div>

      <div className={styles.dezeweek}>
        <Recent />
      </div>

      <div className={styles.borderMarker2}>
        <img src={goal} className={styles.ballInGoal} alt="" />
        <img src={goal_small} className={styles.ballInGoal_small} alt="" />
      </div>

      <div className={styles.stand}>
        <Stand />
      </div>

      <div className={styles.borderMarker}>
        <img src={goal4} className={styles.ballInGoal} alt="" />
        <img src={goal4_small} className={styles.ballInGoal_small} alt="" />
      </div>

      <div className={styles.allmatches}>
        <Uitslagen />
      </div>

      <div className={styles.borderMarker}>
        <img src={goal2} className={styles.ballInGoal} alt="" />
        <img src={goal2_small} className={styles.ballInGoal_small} alt="" />
      </div>

      <Clubs />

      <div className={styles.topScores1}>
        <div className={styles.top}>Topscorers seizoen {season}</div>
          <div className={styles.scorers}>
          {topScorers &&
            topScorers.slice(0, 3).map((scorer, index) => (
              <div className={styles.topScorers} key={index}>
                
                <div className={styles.scorerInfo}>
                  <img src={scorer.team.crest} alt="" style={{width:"30px"}}/>
                  <div className={styles.name}>{scorer.player.name} - {scorer.team.shortName}</div>
                </div>
                <div className={styles.goals}>{scorer.goals} goals</div>
              </div>
            ))}
        </div>
      </div>

      
    </div>
  );
};

export default Home;
