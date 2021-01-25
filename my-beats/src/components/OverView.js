import React from 'react';
import UserNav from './UserNav';
import BottomFooter from './BottomFooter';
import ConnectAlert from './ConnectAlert';
/*import {isLoggedIn} from './Spotify/server.js';*/


const OverView = () =>
{
    
       return( <div class='pageContainer'>
           <UserNav />
           <ConnectAlert />
           <BottomFooter />
       </div>)

}

// Grabs URL after 'OverView' and parses access token. Will return empty string if user not logged in
function getAccessToken() {
    var queryString = window.location.search;
    console.log(queryString);
    var accessToken = queryString.slice(14, queryString.length);
    console.log(accessToken);
    return accessToken;
}

fetchDataTest();

/* DOCUMENTATION FOR GETTING DATA 

fetch(API_ENDPOINT)

*/

function fetchDataTest() {
    var accessToken = getAccessToken();

    // API endpoint
    fetch('https://api.spotify.com/v1/me', {
        headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json()).then((data) => {
        console.log(data);
        return data;
    })
}

export default OverView;
