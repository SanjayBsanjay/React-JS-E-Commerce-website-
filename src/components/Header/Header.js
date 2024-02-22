import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";


const Header = () => {
  return (
    <header className='header text-white'>
      <div className='container'>
            <div className='header-cnt-top-r'>
              <ul className='top-links flex align-center'>
                <li>
                  <Link to = "/" className='top-link-itm'>
                  </Link>
                </li>
                <li>
                  <Link to = "/register">
                    <span className='top-link-itm-txt'>Register</span>
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to = "/">
                    <span className='top-link-itm-txt'>Log in</span>
                  </Link>
                </li>
              </ul>
            </div>
          
          <div className='header-cnt-bottom'>
            <Navbar />
          </div>
      </div>
    </header>
  )
}

export default Header