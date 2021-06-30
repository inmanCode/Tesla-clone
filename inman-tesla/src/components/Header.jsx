import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import '../styles/header.css';
const Header = ({ setFilterApplication }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  setFilterApplication(burgerStatus);
  return (
    <div className='header-container'>
      <div
        className='nav-bar'
        style={{ filter: burgerStatus ? `blur(8px)` : `` }}
      >
        <a href='#' className='logo'>
          <img src='/images/logo.svg' alt='' />
        </a>
        <div className='models'>
          <div>Model S</div>
          <div>Model X</div>
          <div>Model 3</div>
          <div>Model Y</div>
          <div>solar roof</div>
          <div>solar panels</div>
        </div>
        <div className='header-right'>
          <a href='#'>Shop</a>
          <a href='#'>Account</a>
          <div className='menu' onClick={() => setBurgerStatus(true)}>
            Menu
          </div>
        </div>
      </div>
      <div
        className='side-bar'
        style={{
          transform: burgerStatus ? `translateX(0)` : `translateX(100%)`,
        }}
      >
        <div className='close'>
          <CloseIcon
            className='closeIcon'
            onClick={() => setBurgerStatus(false)}
          />
        </div>
        <li>
          <a href='#'>Model X</a>
        </li>
        <li>
          <a href='#'>Model Y</a>
        </li>
        <li>
          <a href='#'>Model 3</a>
        </li>
        <li>
          <a href='#'>Model S</a>
        </li>
        <li>
          <a href='#'>Existing inventory</a>
        </li>
        <li>
          <a href='#'>Used inventory</a>
        </li>
        <li>
          <a href='#'>Trade-in</a>
        </li>
        <li>
          <a href='#'>Cyber truck</a>
        </li>
        <li>
          <a href='#'>Roadster</a>
        </li>
        <li>
          <a href='#'>Semi</a>
        </li>
        <li>
          <a href='#'>Charjing</a>
        </li>
      </div>
    </div>
  );
};

export default Header;
