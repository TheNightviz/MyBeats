import React from 'react';
import UserNav from './UserNav';
import BottomFooter from './BottomFooter';
import ConnectAlert from './ConnectAlert';
import OverViewData from './OverViewData';
import { get } from 'request';
/*import {isLoggedIn} from './Spotify/server.js';*/


const OverView = () =>
{

       return( <div class='pageContainer'>
           <UserNav />
           <ShowConnectAlert />
           <BottomFooter />
       </div>)

}

//Checks if user is connected to Spotify by using localStorage to handle showing ConnectAlert
function ShowConnectAlert() {
    if(localStorage.getItem('spotifyToken') === ''){
        if (getAccessToken() === '') {
            return <ConnectAlert />;
        }
    }    
    return <OverViewData />; 
}

// Grabs URL after 'OverView' and parses access token. Will return empty string if user not logged in
function getAccessToken() {
    var queryString = window.location.search;
    console.log(queryString);
    var accessToken = queryString.slice(14, queryString.length);
    console.log(accessToken);
    localStorage.setItem('spotifyToken', accessToken);
    return accessToken;
}

fetchDataTest();

/* DOCUMENTATION FOR GETTING DATA

fetch(API_ENDPOINT)

*/

function fetchDataTest() {
    var accessToken = localStorage.getItem('spotifyToken');
    var testArtist = {
        name: "Rex Orange County",
        id: "7pbDxGE6nQSZVfiFdq9lOL"
    };
    var testArtist2 = {
        name: "Kendrick Lamar",
        id: "2YZyLoL8N0Wb9xBt1NhZWg"
    };
    var testArtist3 = {
        name: "Dillon Francis",
        id: "5R3Hr2cnCCjt220Jmt2xLf"
    };
    var testArtist4 = {
        name: "Porter Robinson",
        id: "3dz0NnIZhtKKeXZxLOxCam"
    };
    var testArtist5 = {
        name: "Kanye West",
        id: "5K4W6rqBFWDnAN6FQUkS6x"
    };
    var getRequest = 'https://api.spotify.com/v1/artists/' + testArtist4.id;
    // API endpoint
    fetch(getRequest, {
        headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json()).then((data) => {
        console.log(data);
        return data;
    })
}

//Gets users top artists
function getTopArtists() {
    console.log("USER ACT:");
    var userAccessToken = localStorage.getItem('spotifyToken');
    console.log(userAccessToken);
    var getRequest = 'https://api.spotify.com/v1/me/top/artists';
    // API endpoint
    console.log("TOP ARTISTS:");
    var myTopArtists = fetch(getRequest, {
        headers: {'Authorization': 'Bearer ' + userAccessToken}
    }).then(response => response.json()).then((data) => {
        console.log(data);
        return data;
    })
   
    return myTopArtists;
}

var myTopArtists = getTopArtists();
console.log(myTopArtists);

export default OverView;
