import React from 'react';
import UserNav from '../UserNav';
import BottomFooter from '../BottomFooter';
import AccountData from './AccountData';
import '../../css/index.css';

const MyAccount = () =>
{
       console.log("UserAccessToken: ");
       console.log(localStorage.getItem('spotifyToken'));
       console.log("--Done logging--");
       return(
       <div class='pageContainer'>
        <UserNav />
        <AccountData />   
             
        <BottomFooter />
       </div>
       )

}

export default MyAccount;
