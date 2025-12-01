import DropDown from "../dropdownMenuBar/DropDown"
import './Discover.css'
import BigList from "../BigList/BigList"
import { MainData } from "../../gamedata/MainData"
import { useState } from "react"


function Discover(){
  const [selectedGenre,setSelectedGenre]=useState(null)
  const [selectedPlatform,setSelectedPlatform]=useState(null)
  const[selectedStudio,setSelectedStudio]=useState(null)

    const [selectedGame, setSelectedGame] = useState(null);

    const handleSelectGame = function(game) {
        setSelectedGame(game);
    };


  function filterGames(data) {
    return data.filter(function(game) {

        var genreOk;
        var platformOk;
        var studioOk;

        
        if (!selectedGenre || selectedGenre === "Choose a genre") {
            genreOk = true;
        } else {
            genreOk = (game.genre === selectedGenre);
        }

        
        if (!selectedPlatform || selectedPlatform === "Choose a platform") {
            platformOk = true;
        } else {
            platformOk = (game.platform === selectedPlatform);
        }

        
        if (!selectedStudio || selectedStudio === "Choose game studio") {
            studioOk = true;
        } else {
            studioOk = (game.studio === selectedStudio);
        }

       
        if (genreOk && platformOk && studioOk) {
            return true;
        }

        return false;
    });
}
var filteredGames = filterGames(MainData);
const options = [
    "",
  "Sandbox",
  "Shooter",
  "MOBA",
  "RPG",
  "Action",
  "Adventure",
  "Racing",
  "Sports",
  "Fighting",
  "Party",
  "Simulation",
  "Survival",
  "Stealth",
  "Strategy",
  "Rogue-like",
  "Platformer",
  "Arcade",
  "Runner",
  "Puzzle",
  "Horror"
];
const platformOptions = [
    "",
  "PC",
  "Console",
  "Mobile"
];
const studioOptions = [
    "",
  "Mojang Studios",
  "Epic Games",
  "Roblox Corporation",
  "Riot Games",
  "Blizzard Entertainment",
  "Respawn Entertainment",
  "CD Projekt",
  "FromSoftware",
  "Rockstar Games",
  "Santa Monica Studio",
  "Naughty Dog",
  "Guerrilla Games",
  "Insomniac Games",
  "343 Industries",
  "The Coalition",
  "Playground Games",
  "Polyphony Digital",
  "Infinity Ward / Activision",
  "DICE / EA",
  "Bungie",
  "id Software",
  "Ubisoft",
  "EA Sports",
  "Visual Concepts",
  "Supercell",
  "PUBG Corporation",
  "Activision",
  "miHoYo",
  "Moonton",
  "Garena",
  "Gameloft",
  "Mediatonic",
  "Psyonix",
  "Re-Logic",
  "ConcernedApe",
  "InnerSloth",
  "Pocketpair",
  "Studio Wildcard",
  "Facepunch Studios",
  "Battlestate Games",
  "Valve",
  "Behaviour Interactive",
  "Kinetic Games",
  "Red Barrels",
  "Konami",
  "Bandai Namco",
  "Nintendo",
  "Remedy Entertainment",
  "Kojima Productions",
  "Hello Games",
  "Unknown Worlds Entertainment",
  "Endnight Games",
  "Wube Software",
  "Colossal Order",
  "Frontier Developments",
  "Firaxis Games",
  "Relic Entertainment",
  "Supergiant Games",
  "Team Cherry",
  "Studio MDHR",
  "Moon Studios",
  "Matt Makes Games",
  "RobTop Games",
  "Kiloo & SYBO Games",
  "Imangi Studios",
  "PopCap Games",
  "King"
];



    return(<>
        
        <section className="discover-section">
        <h1>this is discovery page</h1>
        <section className="dropdown-row"> 
            
            <DropDown   options={options}
    placeholder="Choose a genre" onChange={setSelectedGenre}></DropDown>
              <DropDown  onChange={setSelectedPlatform}  options={platformOptions}
    placeholder="Choose a genre"></DropDown>
                <DropDown  onChange={setSelectedStudio}  options={studioOptions}
    placeholder="Choose a genre"></DropDown>
        
        
        
        </section>
        
        <section className="discovery-list">
        
<BigList data={filteredGames} onSelectGame={handleSelectGame}></BigList>
      
   

        
        </section>
          </section>
        </>
    )
}

export default Discover
