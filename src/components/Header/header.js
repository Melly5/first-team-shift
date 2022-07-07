import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    //const [style, setStyle] = useState('');
    const pathname = useLocation().pathname;
	const assignStyle = (path) => pathname === path ? "but-unclicked" : "but-clicked";

    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className='header-sign'>
                    <Link className={assignStyle("/login")} to="/login" style={{ textDecoration: 'none' }}>Sign In</Link>
                    <Link className={assignStyle("/signup")} to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
            </div>
        </div>
    )
}

export default Header;