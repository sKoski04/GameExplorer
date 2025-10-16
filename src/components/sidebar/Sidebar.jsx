import homeButton from './assets/home.png'
import discoverButton from './assets/compass.png'
import calendarButton from './assets/calendar.png'
import settingsButton from './assets/setting.png'
import './Sidebar.css'
function Sidebar(){
    return(
            <>
    <div className='navbar'>
      <ul className='navbar-list'>
         <li><a href="#home"><img className='navbar-icon' src={homeButton} alt="Home icon" /></a></li>
          <li><a href="#discover"><img className='navbar-icon' src={discoverButton} alt="Discover icon" /></a></li>
          <li><a href="#calendar"><img className='navbar-icon' src={calendarButton} alt="calendar icon" /></a></li>
           <li><a href="#settings"><img className='navbar-icon' src={settingsButton} alt="settings icon" /></a></li>
      
        
       

      </ul>
    </div>

    </>
    )
}
export default Sidebar