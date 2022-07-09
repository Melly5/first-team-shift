import React, { useState } from 'react';
import Header from '../../components/Header/header';
import Options from '../../components/Options/options';
import Dialog from '../../components/Dialog/dialog';
import "./chat.css";

function ChatPage() {

    return (
        <div className='mainbox signed'>
            <Header/>
            <div className='chatbox'>
                <Options/>
                <Dialog/>
            </div>
        </div>  
    );
}

export default ChatPage;