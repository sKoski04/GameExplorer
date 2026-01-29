import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header/Header.jsx';

import MostPopularList from './components/most popular/Infobox-text.jsx';

import './App.css'
import Listinfo from './components/list information/Listinfo.jsx';
import BigList from './components/BigList/BigList.jsx';



import { media } from './gamedata/media.js';
import GameCard from './components/GameCard/GameCard.jsx';





function App() {
  const [view,setview]=useState("HOME")
  const[games,setgames]=useState([])
  const[popularGames,setPopularGames]=useState([])
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

  
  if(view==="HOME"){

 
 return( 

<>
<Header setWindow={setview}></Header>
<MostPopularList title={"Welcome to GameDB! Explore everything that is related to videogames, wheter you want to explore new content or review classics we got it all."}></MostPopularList>
<div className='box-wrapper'>
  
<Listinfo  data={popularGames} onSelectGame={null} title="Popular Games"></Listinfo>

<Listinfo data={media} title="Top Creators"></Listinfo>

<GameCard></GameCard>
</div>


</>
 ) }

 if(view==="DISCOVER"){
  return(
    <>
    <Header setWindow={setview}></Header>
  
    <BigList data={games}></BigList>
    </>
  )
 }

  if(view==="MEDIA"){
  return(
    <Header setWindow={setview}></Header>
  )
 }

  if(view==="SEEMORE"){
  return(
    <Header setWindow={setview}></Header>

  )
 }
}






export default App
