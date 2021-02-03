import React from 'react';
import AlertStyle from '../../css/alert.css';

const ConnectAlert = () => {
    return (
       <div class='alertContainer'>
           <h4 class="connectAlertHeader">Uh-oh! You dont have any connected services.</h4>
           <h6 class="connectAlertHeader">Click on any service below to connect your account and view your data</h6>
           <a href='http://localhost:8888/login'><img class='connectIcons' src='/Photos/spotifyicon-green.png' alt='Spotify'></img></a>
       </div>
    );
}
export default ConnectAlert;
