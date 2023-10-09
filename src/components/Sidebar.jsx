import React, { useState } from "react";
import "../componentCss/sidebar.css";
import { playerObj } from "../players";
const Sidebar = ({ showMenu, players, setPlayers, countryName }) => {
  const [receivedObj, setReceivedObj] = useState([{}]);
  const [checkItems, setCheckItems] = useState([]);
  const handlerCheckBoxes = (e) => {
    setReceivedObj(
      countryName === "All"
        ? playerObj.map((player) => player)
        : playerObj.filter(
            (player) => player.country === countryName.toUpperCase()
          )
    );

    if (e.target.checked) {
      setCheckItems([...checkItems, e.target.name]);
      setPlayers(
        players.filter((player) =>
          player.role.toLowerCase().includes(e.target.name.toLowerCase())
        )
      );
    } else {
      setCheckItems(
        checkItems.filter(
          (item) => item.toLowerCase() !== e.target.name.toLowerCase()
        )
      );
      if (receivedObj.length === 0) {
        setPlayers(receivedObj.map((item) => item));
      } else {
        setPlayers(
          receivedObj.filter((item) =>
            checkItems.some((checkItem) => checkItem !== item.role)
          )
        );
      }
    }
  };
  return (
    <div className={(showMenu && "showSidebar") || "hideSidebar"} id="sidebar">
      <div className="checkBoxMainContainer">
        <div className="checkContainer">
          <label htmlFor="Captain">Captains</label>
          <input
            type="checkbox"
            name="Captain"
            id="Captain"
            onChange={handlerCheckBoxes}
          />
        </div>
        <div className="checkContainer">
          <label htmlFor="Player">Batsman</label>
          <input
            type="checkbox"
            name="Batsman"
            id="Player"
            onChange={handlerCheckBoxes}
          />
        </div>
        <div className="checkContainer">
          <label htmlFor="Baller">Baller</label>
          <input
            type="checkbox"
            name="Baller"
            id="Baller"
            onChange={handlerCheckBoxes}
          />
        </div>
        <div className="checkContainer">
          <label htmlFor="All Rounder">Allrounders</label>
          <input
            type="checkbox"
            name="All Rounder"
            id="All Rounder"
            onChange={handlerCheckBoxes}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
