import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from './components/pages/Discover.jsx';
import Home from './components/pages/Home.jsx';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';

import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
<div className='app'>
 <Header></Header>
  <div className='content-wrapper'>
<Sidebar></Sidebar>
<div className='page-content'></div>
<Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='/discover' element={<Discover></Discover>}></Route>
</Routes>


</div>

</div>
</Router>
)
}

export default App
