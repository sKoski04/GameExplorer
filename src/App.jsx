import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Header from './components/Header/Header.jsx'
import MostPopularList from './components/most popular/MostPopularList.jsx'
import Listinfo from './components/list information/Listinfo.jsx'
import './App.css'
import { mostPopular } from './gamedata/mostPopular.js'
import {horror} from './gamedata/horror.js'
import { esports } from './gamedata/esports.js'


function App() {
  const [count, setCount] = useState(0)

  return (
<div className='app'>
 <Header></Header>
  <div className='content-wrapper'>
<Sidebar></Sidebar>
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


</div>
</div>

</div>
  )
}

export default App
