import React, { useState } from "react";
import Display from "./Display";

// will add 1 on all function

export const addValue = currentValue => {
  return currentValue + 1;
};

const Dashboard = () => {
  // set state
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [hit, setHit] = useState(0);
  // const [foul, setFoul] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [guestScore, setGuestScore] = useState(0);

  // strike is  equal to 3 else reset strike and ball index starting
  function playerCurrentStrikes() {
    setStrike(addValue(strike));
    if (strike >= 3) {
      return setStrike(0), setBall(0);
    }
  }

  // if ball is equal to 4 reset strike & balls
  function playerCurrentBall() {
    setBall(addValue(ball));
    if (ball === 4) {
      return setBall(0), setStrike(0);
    }
  }

  // foul increase strike if less or equal to 2 else nothing
  function playerCurrentFoul() {
    setStrike(addValue(strike));
    if (strike === 2) {
      return setStrike(2);
    }
  }

  // balls and strikes reset to 0 when a `hit` is recorded.
  function playerCurrentHits() {
    setHit(addValue(hit));
    setStrike(0);
    setBall(0);
  }

  // Adding Scores
  function homeScores() {
    setHomeScore(addValue(homeScore));
  }

  function guestScores() {
    setGuestScore(addValue(guestScore));
  }

  return (
    <div>
      <div>
        <Display
          ball={ball}
          strike={strike}
          hit={hit}
          homeScore={homeScore}
          guestScore={guestScore}
        />
      </div>
      <div>
        <div>
          <button onClick={homeScores}>Home Score</button>
          <button onClick={guestScores}>Guest Score</button>
        </div>
        <button onClick={playerCurrentBall}>Ball</button>
        <button onClick={playerCurrentHits}>Hit</button>
        <button onClick={playerCurrentStrikes}>Strike</button>
        <button onClick={playerCurrentFoul}>Foul</button>
      </div>
    </div>
  );
};

export default Dashboard;
