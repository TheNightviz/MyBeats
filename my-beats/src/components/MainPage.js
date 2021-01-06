import React from 'react';
import UserNav from './UserNav';
import BottomFooter from './BottomFooter';


const MainPage = () =>
{
       return( <div class='pageContainer'>
           <UserNav />

           <h1>You have not connected any accounts. Connect with Spotify below:</h1>
           <BottomFooter />
       </div>)

}

export default MainPage;
