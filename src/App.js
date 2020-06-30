  /* eslint-env jquery */
import { closeDDOnClick } from './functions/actions.js';
import { closeDashOnClick } from './functions/actions.js';
import GoogleImage from './styles/img/googleHomeCrop.png';

// Buttons and Icons
import MenuIcon from './styles/icons/menuIcon.png';
import SearchIcon from './styles/icons/searchIcon.png';
import { ReactComponent as HomeButton2 } from './styles/icons/homeButton2.svg';
import { ReactComponent as UserIcon2 } from './styles/icons/UserIcon.svg';
import { ReactComponent as GearIcon } from './styles/icons/gearIcon.svg';
import { ReactComponent as ProfileIcon } from './styles/icons/profileIcon2.svg';
import { ReactComponent as BackButton } from './styles/icons/back-button.svg';
import { ReactComponent as LogoutIcon } from './styles/icons/logout.svg';
import { ReactComponent as FacebookIcon } from './styles/icons/facebookIcon.svg';
import { ReactComponent as InstagramIcon } from './styles/icons/instagram.svg';
import { ReactComponent as LinkedinIcon } from './styles/icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from './styles/icons/githubIcon.svg';
import { ReactComponent as SlackIcon } from './styles/icons/slack.svg';

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './App.css';

function App() {
  return (

    <div className="App">
      <div className="container">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a>
          
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ml-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {/* Left side of navbar */}
            <ul className="navbar-nav text-uppercase">
                <li className="float-left nav-item pos-rel"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li className="float-left nav-item pos-rel"><a className="nav-link js-scroll-trigger" href="#store">Store</a></li>
            
            {/* Right side of navbar */}
            </ul>
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#gmail">Gmail</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#images">Images</a></li>
              <li className="nav-item"><a id="menuBtn" className="btn btn-social mx-2 small-btn" href="#!"><img src={MenuIcon} alt="#"/></a></li>
              {
                <Navbar>
                    <NavItem icon={<UserIcon2 />}>
                      <DropdownMenu id="dd"/>
                    </NavItem>
                </Navbar>
              }     
            </ul>
          </div>
        </nav>
        
        {/* Google header row */}
        <header className="masthead text-white text-center">
          <div className="overlay">
            <div className="container">
              <div className="row pad-top">
                <div className="col-xl-9 mx-auto">
                  <div className="google-logo">
                    <img src={GoogleImage} alt="Google"/>
                  </div>
                </div>
              </div>
            </div>
              {/* Search bar row */}
              <div className="row search-bar-margin ht-50">
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto inherit-ht">
                  <form className="inherit-ht">
                    <div className="form-row inherit-ht">
                      <div className="col-12 col-md-9 mb-2 mb-md-0">
                        <input type="form" className="form-control form-control-lg" placeholder="Search"/>
                      </div>
                      <div className="col-12 col-md-3 inherit-ht">
                        <button type="submit" className="btn btn-block btn-lg btn-primary inherit-ht">
                          <img id="search-img" src={SearchIcon} alt="SEARCH"/>
                          </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Lower buttons row */}
              <div className="row search-bar-margin ht-50  mg-top-30">
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto inherit-ht">
                  <div className="form-row inherit-ht btn-block">
                    <input className="gbqfba tfB0Bf gNO89b jhp mg-right-15" value="Google Search" aria-label="Google Search" name="btnK" type="submit" data-ved="0ahUKEwjepZLJiKbqAhXjIDQ"/>
                    <input id="gbqfbb" className="tfB0Bf gbqfba jhp inherit-vis mg-left-15" value="I'm Feeling Lucky" aria-label="I'm Feeling Lucky" name="btnJ" type="submit"/>
                  </div>
                </div>
              </div>
              <div className="mg-top-30"><a id="promo-link" className="promo-link" href="#!">Join YouTube Creators in Commemorating Pride Month</a></div>
              
            </div>
        </header>
      </div> 
      
      {/* Footer */}
      <footer className="footer py-4">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-left">
                <a className="mr-3 ml-3" href="#!">Advertising</a>
                <a className="mr-3" href="#!">Business</a>
                <a className="mr-3" href="#!">How Search Works</a>
          </div>
          <div id="midFooter" className="col-lg-4 my-3 my-lg-0">
              {
                <Navbar>
                    <NavItem icon={<HomeButton2 id="homeBtn"/>}>
                      <Dashboard/>
                    </NavItem>
                </Navbar>
              }     
          </div>
          <div className="col-lg-4 text-lg-right">
              <a className="mr-3" href="#!">Privacy</a>
              <a className="mr-3" href="#!">Terms</a>
              <a className="mr-3" href="#!">Settings</a>
          </div>
        </div>
      </footer>
  </div>
  );
}

// event trigger to close user menu
let closeDropDown = closeDDOnClick();
// // event trigger to close dashboard
let closeDash = closeDashOnClick();

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight + 40;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
    <a href="#!" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
      <span className="icon-button">{props.leftIcon}</span>
      { props.children }
      <span className="icon-right">{props.rightIcon}</span>
    </a>
    );
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition in={activeMenu=== 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem 
            leftIcon={<ProfileIcon/>}>     
            My Profile
          </DropdownItem>
          <DropdownItem 
            leftIcon={<GearIcon/>}
            goToMenu="privacy">
            Privacy
          </DropdownItem>
          <DropdownItem 
            leftIcon={<GearIcon/>}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem 
            leftIcon={<LogoutIcon/>}>
            Log Out
          </DropdownItem>
          <DropdownItem 
            leftIcon={<ProfileIcon/>}>     
            My Profile
          </DropdownItem>
          <DropdownItem 
            leftIcon={<GearIcon/>}
            goToMenu="privacy">
            Privacy
          </DropdownItem>
          <DropdownItem 
            leftIcon={<GearIcon/>}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem 
            leftIcon={<LogoutIcon/>}>
            Log Out
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Privacy */}
      <CSSTransition in={activeMenu === 'privacy'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem 
            leftIcon={<BackButton />}
            goToMenu="main"/>
          <DropdownItem>No one reads these</DropdownItem>
        </div>
      </CSSTransition>

      {/* Settings */}
      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem 
            leftIcon={<BackButton />}
            goToMenu="main"/>
          <DropdownItem>Advanced Search</DropdownItem>
          <DropdownItem>Shared Details</DropdownItem>
          <DropdownItem>Help</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('main');

  function DashboardItem(props) {
    return (
    <a href="#!" className="dash-item dash-li-mg" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
      <span className="dash-icon-button">{props.leftIcon}</span>
      { props.children }
    </a>
    );
  }
  return (
    <div className="dashboard">
      <CSSTransition in={activeMenu=== 'main'} unmountOnExit timeout={500} classNames="menu-primary">
        <div className="dash-menu">
          <DashboardItem 
            leftIcon={<InstagramIcon/>}>     
          </DashboardItem>
          <DashboardItem 
            leftIcon={<FacebookIcon/>}>
          </DashboardItem>
          <DashboardItem 
            leftIcon={<GitHubIcon/>}>
          </DashboardItem>
          <DashboardItem 
            leftIcon={<LinkedinIcon/>}>
          </DashboardItem>
          <DashboardItem 
            leftIcon={<SlackIcon/>}>
          </DashboardItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar2">
      <ul className="navbar2-nav"> { props.children } </ul>
    </nav> 
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav2-item">
      <a href="#!" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
