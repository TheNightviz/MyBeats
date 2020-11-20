import React from 'react';
import UserNav from './UserNav';
import BottomFooter from './BottomFooter';
import ConnectAlert from './ConnectAlert';


const OverView = () =>
{
       return( <div class='pageContainer'>
           <UserNav />
           <ConnectAlert />
           <BottomFooter />
       </div>)

}

export default OverView;
