import React from 'react';
import UserNav from './UserNav';
import BottomFooter from './BottomFooter';

const MyData = () =>
{
       return(
       <div className = 'pageContainer'>
           <UserNav />
           <h1>This is MyData</h1>


           <BottomFooter />
       </div>)

}

export default MyData;
