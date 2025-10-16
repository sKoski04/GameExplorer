import searchImage from './assets/search.png'
import profileImage from './assets/account.png'
import logo from './assets/logo.png'
import './Header.css'
function Header(){

    return(
        <div className="search-container">
            <img className='logo' src={logo} alt="logo" />
            <div className='search-elements'>
           <input  type="text" placeholder="Search for games,companies,platforms" className="input-field" />
           <a href=""><img className="search-icon" src={searchImage} alt="search-icon" /></a>
           </div>
           <ul className="search-results"></ul>
           <a href=""><img className='profile-icon' src={profileImage} alt="profile-icon" /></a>



        </div>
      

       

      
    )
}
export default Header