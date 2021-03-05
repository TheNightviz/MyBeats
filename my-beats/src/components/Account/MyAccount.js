import React from 'react';
import UserNav from '../UserNav';
import BottomFooter from '../BottomFooter';
import AccountImage from './AccountImage';
import '../../css/index.css';

const MyAccount = () =>
{
       console.log("UserAccessToken: ");
       console.log(localStorage.getItem('spotifyToken'));
       console.log("--Done logging--");
       return(
       <div class='pageContainer'>
        <UserNav />
        <AccountImage />   
             
        <BottomFooter />
       </div>
       )

}

export default MyAccount;
