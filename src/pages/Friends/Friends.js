import React from "react";
import { SideBar } from "../../components";
import { Header } from '../../components/Header/Header';
import { FriendsList } from "../../components/FriendsList/FriendsList";
import './Friends.css';

export const Friends = () => {
    
    return (
        <div className='mainbox signed'>
            <Header/>
            <div className='friendsbox'>
                <SideBar/>
                <FriendsList/>
            </div>
        </div> 
    );
}