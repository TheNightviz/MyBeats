import React from 'react';
import UserNav from '../UserNav';
import BottomFooter from '../BottomFooter';

const MyAccount = () =>
{
       console.log("UserAccessToken: ");
       console.log(localStorage.getItem('spotifyToken'));
       console.log("--Done logging--");
       return(
       <div class='pageContainer'>
           <UserNav />
           <h1>This is MyAccount</h1>
           <BottomFooter />
       </div>)

}

export default MyAccount;
