import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import profileHeader from '../../assets/images/profile-header.jpg';
import { NavItem } from '../../components';
import { Link } from "react-router-dom";


function Header(props) {
  return (
    <>
      <div className="navbar navbar-expand-md navbar-dark text-white" id='navBar' >
        <div className="container" >
          <a href="/" className="navbar-brand"><img src={logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <input type='text' className='inputNavBar' placeholder='Type Something' />
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <NavItem><Link to={'/'} className="nav-link" >Home</Link></NavItem>
              <NavItem><Link to={'/Browser'} className="nav-link" >Browser</Link></NavItem>
              <NavItem><Link to={'/Details'} className="nav-link" >Details</Link></NavItem>
              <NavItem><Link to={'/Streams'} className="nav-link" >Streams</Link></NavItem>
            </ul>
            <Link to={'/Profile'} style={{textDecoration:'none'}}>
            <button className='profBtn'>
              <p>profile</p>
              <img src={profileHeader} />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;