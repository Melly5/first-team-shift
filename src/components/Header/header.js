import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [style, setStyle] = useState('');
    const pathname = useLocation().pathname;
	const assignStyle = (path) => pathname === path ? "but-clicked" : "but-unclicked";


    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className='header-sign'>
                <Button className={assignStyle("/login")}>
                    <Link to="/login">Sign In</Link>
                </Button>
                <Button className={assignStyle("/signup")}>
                    <Link to="/signup">Sign Up</Link>
                </Button>
            </div>
        </div>
        
    )
}

export default Header;