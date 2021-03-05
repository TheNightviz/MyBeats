import React from 'react';
import '../../css/index.css';


const AccountImage = () => {
   return(
      <div id="AccountImage">
         <img src = '../../../public/Photos/spotifyicon.png' alt='user-profile-picture' style={{padding:'400px', width:'500px', height:'500px', borderRadius: '400px'}}></img>
         <h1>Hello "user"</h1>
      </div>
   )
};

export default AccountImage;
