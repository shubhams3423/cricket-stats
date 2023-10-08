import React from "react";
import "../componentCss/EmptyContainer.css";
import { playerObj } from "../players";
const Empty = ({ text, setPlayers, setPlayerName }) => {
  return (
    <div className="emptyContainer">
      <div className="searchContainer">
        <img
          src="https://www.pngmart.com/files/8/Search-Button-PNG-HD-Quality.png"
          alt=""
        />
      </div>
      <p className="notFoundText">{text}</p>
      <div className="mainContainer">
        <p className="Textmessage">
          No result match this filter criteria. Remove all filters or clear
          filters to show results.
        </p>
      </div>
      <p
        className="clearFilter"
        onClick={() => {
          setPlayers(playerObj);
          setPlayerName("");
        }}
      >
        Clear all filters
      </p>
    </div>
  );
};

export default Empty;
