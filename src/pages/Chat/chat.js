import React, { useState } from 'react';
import { TextField,Typography, Stack, Button, IconButton, InputAdornment } from "@mui/material";
import Header from '../../components/Header/header';
import "./chat.css";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function ChatPage() {

    return (
        <div className='mainbox signed'>
            <Header/>
            <div className='chatbox'>
                <div className='profilebox'>
                    <div className='profilebox-container'>
                        <div className='profile'>
                            <div className='profile-photo'></div>
                            <div className='profile-info'>
                                <div className='profile-nickname'>Александр</div>
                                <div className='status'>
                                    <div className='status-icon'></div>
                                    <div className='status-info'>в сети</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='options'>
                        <div className='options-item'>
                            <div className='options-icon'>
                                <PeopleOutlineIcon sx={{ color: "#C5C5C5" }}/>
                            </div>
                            <div className='option'>Друзья</div>
                        </div>
                        <div className='options-item'>
                            <div className='options-icon'>
                                <SettingsOutlinedIcon sx={{ color: "#C5C5C5" }}/>
                            </div>
                            <div className='option'>Настройки</div>
                        </div>
                    </div>
                    <div className='messages'>
                        <div className='messages-logo'>
                            <KeyboardArrowDownOutlinedIcon sx={{ color: "#5A20FF" }}/>
                            <div className='message-info'>Сообщения</div>
                        </div>
                        <div className='messages-item'>
                            <div className='profile-photo list'></div>
                            <div className='profile-nickname list'>Александр</div>
                        </div>
                        <div className='messages-item'>
                            <div className='profile-photo list'></div>
                            <div className='profile-nickname list'>Александр</div>
                        </div>
                        <div className='messages-item'>
                            <div className='profile-photo list'></div>
                            <div className='profile-nickname list'>Александр</div>
                        </div>
                    </div>
                </div>
                <div className='dialogbox'>
                    <div className='message-box'></div>
                    <div className='send-box'></div>
                </div>
            </div>
        </div>  
    );
}

export default ChatPage;