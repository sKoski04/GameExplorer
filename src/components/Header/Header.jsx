import searchImage from './assets/search.png'
import profileImage from './assets/profile.png'

import './Header.css'
function Header({setWindow}){

    return(
        <div className='header-wrapper'>
       
        <div className="header-container">
        <div className='nav-items'>
            <span className='search-text' onClick={()=>setWindow("HOME")}>Home</span>
             <span className='search-text' onClick={()=>setWindow("DISCOVER")}>Discover</span>
             <span className='search-text' onClick={()=>setWindow("MEDIA")}>Media</span>
             <button className="dropdown-button"><span className='arrow-down'onClick={()=>setWindow("SEEMORE")}>See more ⌄</span></button>
             
</div>
          
        </div>
 <button className='login-button'><span className='search-text'>Login</span></button>
        </div>
      

       

      
    )
}
export default Header