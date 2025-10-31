import homeButton from './assets/home.png'
import discoverButton from './assets/compass.png'
import calendarButton from './assets/calendar.png'
import settingsButton from './assets/setting.png'
import './Sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar(){
    return(
            <>
    <div className='navbar'>
      <ul className='navbar-list'>
         <li> <Link to="/"><img className='navbar-icon' src={homeButton} alt="Home icon" /></Link></li>
          <li><Link to='/discover'><img className='navbar-icon' src={discoverButton} alt="Discover icon" /></Link></li>
          <li><a href="#calendar"><img className='navbar-icon' src={calendarButton} alt="calendar icon" /></a></li>
           <li><a href="#settings"><img className='navbar-icon' src={settingsButton} alt="settings icon" /></a></li>
      
        
       

      </ul>
    </div>

    </>
    )
}
export default Sidebar