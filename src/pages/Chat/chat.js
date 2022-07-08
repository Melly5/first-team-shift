import React, { useState } from 'react';
import { TextField,Typography, Stack, Button, IconButton, InputAdornment } from "@mui/material";
import Header from '../../components/Header/header';
import "./chat.css"

function ChatPage() {

    return (
        <div className='mainbox signed'>
            <Header/>
            <div className='chatbox'>
                <div className='profilebox'></div>
                <div className='dialogbox'>
                    <div className='message-box'></div>
                    <div className='send-box'></div>
                </div>
            </div>
        </div>  
    );
}

export default ChatPage;