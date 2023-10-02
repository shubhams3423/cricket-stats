import React from "react";
import "../componentCss/player.css";
const Player = ({ player }) => {
  return (
    <div className="mainPlayerContainer">
      <div className="playerContainer">
        <div className="imgContainer">
          <img src={player.image} alt="" className="playerImg" />
        </div>
        <h1>Name :{player.name}</h1>
        <h2>Age :{player.age}</h2>
        <h2>Role :{player.Role}</h2>
        <p>High Score :{player.high_score}</p>
      </div>
    </div>
  );
};

export default Player;
