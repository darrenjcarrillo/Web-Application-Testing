import React from "react";

const Display = props => {
  console.log(props);
  return (
    <div>
      .<h2>Home: {props.homeScore}</h2>
      <h2>Guest: {props.guestScore}</h2>
      <p>Ball: {props.ball}</p>
      <p>Hit: {props.hit}</p>
      <p>Out: {props.strike}</p>
    </div>
  );
};

export default Display;
