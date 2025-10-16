import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Header from './components/Header/Header.jsx'
import MostPopularList from './components/most popular/MostPopularList.jsx'
import Listinfo from './components/list information/Listinfo.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='app'>
 <Header></Header>
  <div className='content-wrapper'>
<Sidebar></Sidebar>
<div className='list-wrapper'>
  <div className='list-item'>
 <Listinfo></Listinfo>
<MostPopularList> </MostPopularList>

  </div>
   <div className='list-item'>
 <Listinfo></Listinfo>
<MostPopularList> </MostPopularList>

  </div>
   <div className='list-item'>
 <Listinfo></Listinfo>
<MostPopularList> </MostPopularList>

  </div>


</div>
</div>

</div>
  )
}

export default App
