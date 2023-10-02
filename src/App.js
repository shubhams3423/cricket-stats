import './App.css';
 import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { AiOutlineSearch } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { useState } from 'react';
import "./componentCss/Nav.css"
const App=()=> {
  const playerObj=[
    {
      id:1,
    name:"Virat Kohli",
    image:"https://www.cricbuzz.com/a/img/v1/152x152/i1/c332891/virat-kohli.jpg",
    age:30,
    Role:"Batsman",
    high_score:254,
     country:"India"
    }, 
    {
      id:2,
    name:"Rohit Sharma",
    image:"https://www.cricbuzz.com/a/img/v1/152x152/i1/c332888/rohit-sharma.jpg",
    age:30,
    Role:"Batsman",
    high_score:300,
    country:"India"
    },
    {
      id:3,
    name:"Ms Dhoni",
    image:"https://www.cricbuzz.com/a/img/v1/152x152/i1/c170677/ms-dhoni.jpg",
    age:30,
    Role:"Wicket-keeper",
    high_score:170,
     country:"India"
    },
    {
      id:4,
    name:"Shikar Dhawan",
    image:"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170660/shikhar-dhawan.jpg",
    age:30,
    Role:"Batsman",
    high_score:200,
     country:"India"
    },
    {
      id:5,
    name:"Babar Azam",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkB35mWD60fR3J5lOy-IsWgQyX4DJd7SztzBdh12bTK6PVr6W9R4vuwW6qW75mm4VNrk4&s",
    age:27,
    Role:"Batsman",
    high_score:80,
     country:"Pakistan"
    },
    {
      id:6,
    name:"Sachin Tendulkar",
    image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwdWzSkfo9jajTxGD4T_-7bVPMwe7ndwjTdAOuw58O_UXJj2jO",
    age:30,
    Role:"Batsman",
    high_score:270,
     country:"India"

    },
    {
      id:7,
    name:"Trent  Boult",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2018.02.03.22.23.14-AUSvNZL_T20_AUS_innings%2C_SCG_%2839533156665%29.jpg/330px-2018.02.03.22.23.14-AUSvNZL_T20_AUS_innings%2C_SCG_%2839533156665%29.jpg",
    age:26,
    Role:"Baller",
    high_score:210,
     country:"New Zealand"
    },
    {
      id:8,
    name:"Devon  Conway",
    image:"https://www.cricbuzz.com/a/img/v1/152x152/i1/c244818/devon-conway.jpg",
    age:36,
    Role:"WK-Batsman",
    high_score:123,
     country:"New Zealand"
    },
    {
      id:9,
    name:"Kusal Perera",
    image:"https://www.cricbuzz.com/a/img/v1/152x152/i1/c170718/kusal-perera.jpg",
    age:29,
    Role:"WK-Batsman",
    high_score:190,
     country:"Sri Lanka"
    },
    {
      id:10,
    name:"David Miller",
    image:"https://staticg.sportskeeda.com/editor/2023/02/2d473-16762696634021-1920.jpg?w=260",
    age:32,
    Role:"Batsman",
    high_score:167,
     country:"South Africa"
    }
    ]
const [players,setPlayers]=useState(playerObj)
const [country,setCountry]=useState("India")
const [showMenu, setShowMenu] = useState(false);
   const handleSideMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }; 
  const handleDropDownMenu = (e) => { 
     setCountry(e.target.value)
    setPlayers(playerObj.filter((item)=>item.country===e.target.value));
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
              alt="logo" className='appLogo'
            />
          </div>
          <h2>Cricket Stats</h2>
        </div>
        <div className="searchSection">
          <input type="text" placeholder="Search Players..." />
          <div>
            <AiOutlineSearch className="searchIcon" />
          </div>
          <div className="optionSection">
            <select
              name="country"    
              className={(showMenu && "showDropDown") || "hideDropDown"}
              id="countryNames"
              onChange={handleDropDownMenu}
            >
              <option value="India" selected>India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="New Zealand">New Zealand</option>
              <option value="South Africa">South Africa</option>
             </select>
          </div>
        </div>
      </nav>
    </div>
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} /> 
        <main> 
          <div className='playersSection'> 
         {
          players.filter((player)=>player.country===country).map((player)=> 
           <Player player={player}/>
           )
        }
           </div>
        </main>
    </div>
  );
}

export default App;
