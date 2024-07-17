import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import profileHeader from '../../assets/images/profile-header.jpg';
import { NavItem } from '../../components';

function Header(props) {
  return (
    <>
      <div className="navbar navbar-expand-md navbar-dark text-white" id='navBar' >
        <div className="container" >
          <a href="#" className="navbar-brand"><img src={logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <input type='text' className='inputNavBar' placeholder='Type Something' />
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              
              <NavItem><a href="#hero" className="nav-link">Home</a></NavItem>
              <NavItem><a href="#features" className="nav-link">Browse</a></NavItem>
              <NavItem><a href="#faq" className="nav-link">Details</a></NavItem>
              <NavItem><a href="#faq" className="nav-link">Streams</a></NavItem>
            </ul>
            <button className='profBtn'>
              <p>profile</p>
              <img src={profileHeader} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;