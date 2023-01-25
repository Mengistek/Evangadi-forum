import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'



function Header() {
  // const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-logo">
        
          <img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png" />
        
      </div>
      <div className="home-sign">
        <div>
          <Link to="/home">
            <h3>Home</h3>
          </Link>
        </div>

        <h3>Home it Works</h3>
        <div>
          <Link to="/login">
            <button>SIGN IN </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;