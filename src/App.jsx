import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import "./componentCss/Nav.css";
import Empty from "./components/Empty";
import { playerObj } from "./players";

const App = () => {
  const [players, setPlayers] = useState(playerObj);
  const [playerName, setPlayerName] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [countryName, setCountryName] = useState("All");
  const handleSideMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  const handleDropDownMenu = (e) => {
    setCountryName(e.target.value);
    if (e.target.value === "All") {
      setPlayers(playerObj);
      setPlayerName("");
    } else {
      setPlayers(
        playerObj.filter((player) => player.country === e.target.value)
      );
      setPlayerName("");
    }
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      setPlayers(
        players.filter((player) =>
          player.name.toLowerCase().includes(playerName.toLowerCase())
        )
      );
    }
  };
  const handleOnclickRenderPlayers = () => {
    if (playerName !== "") {
      setPlayers(
        playerObj.filter((player) => player.name.includes(playerName))
      );
    }
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <nav>
          <div className="logoSection">
            <div>
              <HiMenu className="Menu" onClick={handleSideMenu} />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0A_xyl0HmXvmpM6mh6PiuK9MO1gMIbvxbvgjmiT1pGODc1bu-"
                alt="logo"
                className="appLogo"
              />
            </div>
            <h2>Cricket Stats</h2>
          </div>
          <div className="searchSection">
            <input
              type="text"
              placeholder="Search Players..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyDown={handleInput}
            />
            <div>
              <AiOutlineSearch
                className="searchIcon"
                onClick={handleOnclickRenderPlayers}
              />
            </div>
            <div className="optionSection">
              <select
                name="country"
                className={(showMenu && "showDropDown") || "hideDropDown"}
                id="countryNames"
                defaultValue={"All"}
                onChange={handleDropDownMenu}
              >
                <option value="INDIA">India</option>
                <option value="PAKISTAN">Pakistan</option>
                <option value="SRI LANKA">Sri Lanka</option>
                <option value="NEW ZEALAND">New Zealand</option>
                <option value="SOUTH AFRICA">South Africa</option>
                <option value="All">All</option>
              </select>
            </div>
          </div>
        </nav>
      </div>
      {/* <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        players={players}
        setPlayers={setPlayers}
        countryName={countryName}
      /> */}
      <main>
        <div className="playersSection">
          {players.length === 0 ? (
            <Empty
              text={"No Result Found"}
              players={players}
              setPlayers={setPlayers}
              setPlayerName={setPlayerName}
            />
          ) : (
            players.map((player, key) => <Player player={player} key={key} />)
          )}
        </div>
      </main>
    </div>
  );
};
export default App;
