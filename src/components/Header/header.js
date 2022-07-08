import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
    //const [style, setStyle] = useState('');
    const pathname = useLocation().pathname;
	const assignStyle = (path) => pathname === path ? "but-unclicked" : "but-clicked";

    function unsigned() {
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
        );
    }

    function signed() {
        return (
            <div className="header signed">
                <div className="signed-container">
                    <div className="header-logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className='header-info'>
                            
                            <Link className={assignStyle("/login")} to="/login" style={{ textDecoration: 'none' }}>Sign In</Link>
                            <Link className={assignStyle("/signup")} to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }


    return (
        signed()
        //props.signed ? signed() : unsigned()
    );
}

export default Header;