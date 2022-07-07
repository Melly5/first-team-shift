import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const Header = () => {
    const [style, setStyle] = useState("but-unclicked");
  
    const changeStyle = () => {
        setStyle("but-clicked");
    };

    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className='header-sign'>
                <Button className={style} onClick={changeStyle}>
                    <Link to="/login" style={{ textDecoration: 'none' }}>Sign In</Link>
                </Button>
                <Button className={style} onClick={changeStyle}>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
                </Button>
            </div>
        </div>
        
    )
}

export default Header;