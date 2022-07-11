import React from "react";
import Options from "../../components/Options/options";
import Header from '../../components/Header/header';
import FriendsList from "../../components/FriendsList/FriendsList";
import './Friends.css';

function friendsPage() {
    
    return (
        <div className='mainbox signed'>
            <Header/>
            <div className='friendsbox'>
                <Options/>
                <FriendsList/>
            </div>
        </div> 
    );
}
export default friendsPage;
