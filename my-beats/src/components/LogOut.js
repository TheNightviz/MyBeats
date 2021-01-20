import React from 'react';
import Navbar from './Navbar';
import BottomFooter from './BottomFooter';


const LogOut = () =>
{
       return(
       <div class='pageContainer'>
              <Navbar />
           <h1>You have signed out.</h1>
           <BottomFooter />
       </div>)

}

export default LogOut;
