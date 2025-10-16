import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Header from './components/Header/Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='app'>
 <Header></Header>
  <div className='content-wrapper'>
<Sidebar></Sidebar>
</div>

</div>
  )
}

export default App
