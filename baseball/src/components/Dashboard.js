import React, { useState } from "react";
import Display from "./Display";

// will add 1 on all function

export const addBall = currentBall => {
  return currentBall + 1;
};

export const addStrike = currentStrike => {
  return currentStrike + 1;
};

export const addFoul = currentFoul => {
  return currentFoul + 1;
};

export const addHit = currentHit => {
  return currentHit + 1;
};

const Dashboard = () => {
  // set state
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [guestScore, setGuestScore] = useState(0);

  return (
    <div>
      <div>
        <Display />
      </div>
      <div>
        <div>
          <button>Home Score</button>
          <button>Guest Score</button>
        </div>
        <button>Ball</button>
        <button>Hit</button>
        <button>Strike</button>
        <button>Foul</button>
      </div>
    </div>
  );
};

export default Dashboard;
