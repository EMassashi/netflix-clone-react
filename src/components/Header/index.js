import React from 'react'
import './index.css'
import netflixLogo from '../../assets/netflix-logo.png'
import userLogo from '../../assets/user-logo.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';


export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={netflixLogo} alt="Netflix" />
        </a>
      </div>
      <div className="header--nav">
        <a href="/">Início</a>
        <a href="/">Séries</a>
        <a href="/">Filmes</a>
        <a href="/">Bombando</a>
        <a href="/">Minha lista</a>
        <a href="/">Assista de novo</a>
      </div>

      <div className="header--user">
        <div className="search" onClick="">
          <SearchIcon style= {{ fontSize: 30 }}/>
        </div>
        <div className="infantil">
          INFANTIL
        </div>
        <div className="notification" onClick="">
          <NotificationsIcon style={{ fontSize: 30 }} />
        </div>
        <a href="/">
          <img src={userLogo} alt="User Logo" />
        </a>
        <span className="arrow-down"></span>
      </div>
    </header>
  );
}