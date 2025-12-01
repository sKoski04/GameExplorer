import searchImage from './assets/search.png'
import profileImage from './assets/profile.png'
import logo from './assets/logo.png'
import './Header.css'
function Header(){

    return(
        <div className="search-container">
            <img className='logo' src={logo} alt="logo" />
            <div className='search-elements'>
           
          
           </div>
           <ul className="search-results"></ul>
          



        </div>
      

       

      
    )
}
export default Header