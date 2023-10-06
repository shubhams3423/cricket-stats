import React from "react";
import "../componentCss/player.css";
const Player = ({ player }) => {
  return (
    <div className="mainPlayerContainer">
      <div className="playerContainer">
        <div className="imgContainer">
          <img src={player.image} alt="" className="playerImg" />
        </div>
        <h1> {player.name}</h1>
        <div className="countryContainer">
          <p className="country_name"> {player.country}</p>
          <div className="logoContainer">
            <img src={player.country_logo} alt="" className="country_logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
