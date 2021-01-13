import React from 'react';
import UserNav from './UserNav';
import BottomFooter from './BottomFooter';

const MyAccount = () =>
{
       return(
       <div className='pageContainer'>
           <UserNav />
           <h1>This is MyAccount</h1>
           <BottomFooter />
       </div>)

}

export default MyAccount;
