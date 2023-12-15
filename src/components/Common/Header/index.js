import React from 'react';
import "./Styles.css";
import TemporaryDrawer from './drawer';
import Button from '../Button';

const Header = () => {
  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker<span style={{ color: "var(--blue)"}}>.</span></h1>
        <div className='links'>
            <a href="/">
            <p className='link'>Home</p>
            </a>
            <a href="/">
            <p className='link'>Compare</p>
            </a>
            <a href="/">
            <p className='link'>Watchlist</p>
            </a>
            <a href="#">
            <Button text={"Dashboard"} 
            onClick={() => console.log("Btn clicked")} 
            />
            </a>
            {/* <Button text={"share"} 
            outlined={true}
            onClick={() => console.log("Btn clicked")} 
            /> */}
        </div>
        <div className='mobile-drawer'>
            <TemporaryDrawer />
        </div>
    </div>
  )
}

export default Header;