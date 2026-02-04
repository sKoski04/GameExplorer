import searchImage from './assets/search.png'
import profileImage from './assets/profile.png'

import './Header.css'
function Header({setWindow,onClick}){

    return(
        <div className='header-wrapper'>
       
        <div className="header-container">
        <div className='nav-items'>
        <a className='link' href="#Home">Home</a>
         <a className='link' href="#Discover">Discover</a>

             
</div>
          
        </div>
 
        </div>
      

       

      
    )
}
export default Header