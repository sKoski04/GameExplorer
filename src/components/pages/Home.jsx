import { useState } from 'react'


import Sidebar from '../sidebar/Sidebar.jsx'
import Header from '../Header/Header.jsx'
import MostPopularList from '../most popular/Infobox-text.jsx'
import Listinfo from '../list information/Listinfo.jsx'
import GameStoreList from '../gamestores/GameStoreList.jsx'

import { mostPopular } from '../../gamedata/mostPopular.js'
import {horror} from '../../gamedata/horror.js'
import { esports } from '../../gamedata/esports.js'
import {gameStores} from '../../gamedata/gameStores.js'
import { media } from '../../gamedata/media.js'


function Home() {
  const [count, setCount] = useState(0)

  return (

 


<div className='list-wrapper'>
  <Listinfo></Listinfo>
  <div className='list-item'>

<MostPopularList subtitle={"all time favourites"} buttonText={"see more"} data={mostPopular}> </MostPopularList>

  </div>
 
   <div className='list-item'>
    <MostPopularList subtitle={"Season Favourites: Halloween"} buttonText={"see more"} data={horror}></MostPopularList>



  </div>
     <div className='list-item'>
    <MostPopularList subtitle={"Most popular e-sports titles"} buttonText={"see more"} data={esports}></MostPopularList>



  </div>
   <div className='list-item'>
  <GameStoreList subtitle={"Game stores to get in action"} buttonText={"see all"} data={gameStores}></GameStoreList>



  </div>
   <div className='list-item'>
  <GameStoreList subtitle={"Popular in media"} buttonText={"see all"} data={media}></GameStoreList>



  </div>


</div>



  )
}

export default Home