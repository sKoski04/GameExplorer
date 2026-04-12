import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header/Header.jsx';

import MostPopularList from './components/most popular/Infobox-text.jsx';

import './App.css'
import Listinfo from './components/list information/Listinfo.jsx';
import BigList from './components/BigList/BigList.jsx';
import GameDetailScreen from './components/GameDetailScreen/GameDetailScreen.jsx';



import { media } from './gamedata/media.js';
import GameCard from './components/GameCard/GameCard.jsx';





function App() {
  const [view,setview]=useState("HOME")
  const[games,setgames]=useState([])
  const[popularGames,setPopularGames]=useState([])
  const[selectedGame,setSelectedGame]=useState(null)
  console.log(selectedGame)
useEffect(() => {
  fetch("http://localhost:8080/videogameapi/games")
    .then(res => res.json())
    .then(json => {
      setgames(json);
      console.log("Fetched games:", json);
    })
    .catch(err => console.error(err));
}, []);

useEffect(() => {
  fetch("http://localhost:8080/videogameapi/games/popularity/1")
    .then(res => res.json())
    .then(json => {
      setPopularGames(json);
      console.log("Fetched games:", json);
    })
    .catch(err => console.error(err));
}, []);






  
  if(selectedGame) {
    console.log("changing to selected game....")
    return(
      <GameDetailScreen game={selectedGame} onClose={() => setSelectedGame(null)}></GameDetailScreen>
    )
  }

  if(view==="HOME"){
 
 return( 
<>
<div className='home-grid'>
<div className='header-box'>
  <Header ></Header>
</div>
<BigList data={games} onSelectGame={setSelectedGame} ></BigList>

</div>


</>
 ) 
 }

}






export default App
