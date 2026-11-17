import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className='nav-items'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/discover">Discover</Link>
        
        <Link className='link' to="/videos">Videos</Link>
        <Link className='link' to="/contact">Special</Link>
      </div>
    </div>
  );
}

export default Header