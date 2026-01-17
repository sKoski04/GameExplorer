import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from './components/pages/Discover.jsx';
import Home from './components/pages/Home.jsx';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import MostPopularList from './components/most popular/Infobox-text.jsx';

import './App.css'
import Listinfo from './components/list information/Listinfo.jsx';
import BigList from './components/BigList/BigList.jsx';
import { MainData } from './gamedata/MainData.js';
import DropDown from './components/dropdownMenuBar/DropDown.jsx';
import { mostPopular } from './gamedata/mostPopular.js';
import { media } from './gamedata/media.js';
import GameCard from './components/GameCard/GameCard.jsx';




function App() {
  const [view,setview]=useState("HOME")
  if(view==="HOME"){

 
 return( 

<>
<Header setWindow={setview}></Header>
<MostPopularList title={"Welcome to GameDB! Explore everything that is related to videogames, wheter you want to explore new content or review classics we got it all."}></MostPopularList>
<div className='box-wrapper'>
  
<Listinfo  data={mostPopular} onSelectGame={null} title="Popular Games"></Listinfo>

<Listinfo data={media} title="Top Creators"></Listinfo>

<GameCard></GameCard>
</div>


</>
 ) }

 if(view==="DISCOVER"){
  return(
    <>
    <Header setWindow={setview}></Header>
  
    <BigList data={MainData}></BigList>
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
