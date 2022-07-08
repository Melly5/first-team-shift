import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { Link, useLocation } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = (props) => {
    const pathname = useLocation().pathname;
	const assignStyle = (path) => pathname === path ? "but-unclicked" : "but-clicked";
    const assignHeader = () => pathname === "/login"| pathname === "/signup" ? unsigned() : signed() ;

    function unsigned() {
        return (
            <div className="header">
                <div className="header-logo">
                    <img src={logo} alt="logo" ></img>
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
                    <div className="header-logo signed">
                        <Link to="/login" style={{ textDecoration: 'none' }}><img src={logo} alt="logo"/></Link>
                    </div>
                    <div className='header-info'>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 218, height: 30, mr: 2 }}
                            elevation={1}
                            style={{
                              padding: 8,
                              backgroundColor: "#1B1A2C",
                              border: "none"
                            }}
                        >  
                            <InputBase
                                sx={{ ml: 2, flex: 1, input: { color: '#858585' }  }}
                                placeholder="Поиск..."
                            />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon sx={{ color: "#C5C5C5" }}/>
                            </IconButton>
                        </Paper>                   
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <NotificationsNoneIcon sx={{ color: "#C5C5C5" }}/>
                        </IconButton>   
                    </div>
                </div>
            </div>
        );
    }

    return (
        assignHeader()
    );
}

export default Header;