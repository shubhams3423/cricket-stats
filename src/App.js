import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import "./componentCss/Nav.css";
const App = () => {
  const playerObj = [
    {
      id: 1,
      name: "Virat Kohli",
      image:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c332891/virat-kohli.jpg",
      age: 30,
      Role: "Batsman",
      high_score: 254,
      country: "INDIA",
      country_logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      image:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c332888/rohit-sharma.jpg",
      age: 30,
      Role: "Batsman",
      high_score: 300,
      country: "INDIA",
      country_logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: 3,
      name: "Ms Dhoni",
      image:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170677/ms-dhoni.jpg",
      age: 30,
      Role: "Wicket-keeper",
      high_score: 170,
      country: "INDIA",
      country_logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: 4,
      name: "Shikar Dhawan",
      image:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170660/shikhar-dhawan.jpg",
      age: 30,
      Role: "Batsman",
      high_score: 200,
      country: "INDIA",
      country_logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: 5,
      name: "Babar Azam",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkB35mWD60fR3J5lOy-IsWgQyX4DJd7SztzBdh12bTK6PVr6W9R4vuwW6qW75mm4VNrk4&s",
      age: 27,
      Role: "Batsman",
      high_score: 80,
      country: "PAKISTAN",
      country_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tPeSVSiZxfx3SP3p5L2eqxXNKD6ddAlqUHVEhBzjAwutC-gKqzyhM95r-XE&s=10",
    },
    {
      id: 6,
      name: "Sachin Tendulkar",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwdWzSkfo9jajTxGD4T_-7bVPMwe7ndwjTdAOuw58O_UXJj2jO",
      age: 30,
      Role: "Batsman",
      high_score: 270,
      country: "INDIA",
      country_logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: 7,
      name: "Trent Boult",
      image:
        "https://starsunfolded.com/wp-content/uploads/2016/03/Trent-Boult.jpg",
      age: 26,
      Role: "Baller",
      high_score: 210,
      country: "NEW ZEALAND",
      country_logo:
        "https://mch.govt.nz/sites/default/files/NZ-Flag_of_New_Zealand_svg.png",
    },
    {
      id: 8,
      name: "Devon Conway",
      image:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c244818/devon-conway.jpg",
      age: 36,
      Role: "WK-Batsman",
      high_score: 123,
      country: "NEW ZEALAND",
      country_logo:
        "https://mch.govt.nz/sites/default/files/NZ-Flag_of_New_Zealand_svg.png",
    },
    {
      id: 9,
      name: "Kusal Perera",
      image:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170718/kusal-perera.jpg",
      age: 29,
      Role: "WK-Batsman",
      high_score: 190,
      country: "SRI LANKA",
      country_logo:
        "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
    },
    {
      id: 10,
      name: "David Miller",
      image:
        "https://staticg.sportskeeda.com/editor/2023/02/2d473-16762696634021-1920.jpg?w=260",
      age: 32,
      Role: "Batsman",
      high_score: 167,
      country: "SOUTH AFRICA",
      country_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHpL_OS4eAZD0n1nzLyHwYTpVjhG-0YIcsglBQeh2j8QA925BmfdLgI5dOgJI&s=10",
    },
  ];
  const [players, setPlayers] = useState(playerObj);
  const [playerName, setPlayerName] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const handleSideMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  const handleDropDownMenu = (e) => {
    if (e.target.value === "All") {
      setPlayers(playerObj);
    } else {
      setPlayers(
        playerObj.filter((player) => player.country === e.target.value)
      );
    }
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      setPlayers(playerObj.filter((player) => player.name === playerName));
    }
  };
  const handleOnclickRenderPlayers = () => {
    setPlayers(playerObj.filter((player) => player.name === playerName));
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
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <main>
        <div className="playersSection">
          {players.map((player, key) => (
            <Player player={player} key={key} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default App;
