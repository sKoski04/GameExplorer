import searchImage from './assets/search.png'
import profileImage from './assets/profile.png'

import './Header.css'
function Header({setWindow,onClick}){

    return(
        <div className='header-wrapper'>
           <h1 className='main-title'>Game.DB</h1>
        <div className="header-container">
         
        <div className='nav-items'>
           <input type="text" className='search-bar' placeholder='🔍︎ Search For Games...'/>
        <a className='link' href="">help?</a>
      

             
</div>
          
        </div>
 
        </div>
      

       

      
    )
}
export default Header