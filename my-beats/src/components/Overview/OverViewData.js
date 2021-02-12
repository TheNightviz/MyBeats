import React from 'react';
import overviewStyle from '../../css/overview.css';

const { StatisticsEntity, RecentlyPlayedEntity, DataEntity, OtherDataEntity } = require('./Entity.js');


const OverViewData = () => {
    return (
       <div class="overviewPageContainer">
           <h1 class="overviewHeader"> Welcome, { getSpotifyUsername().display_name }! </h1>
           <h5 class="overviewHeader" id="headersubtext"> Your daily overview is ready.
            You can also check out more stats on the <a id="mydatalink" href='/MyData'>MyData page</a>.</h5>
           <div class="overviewEntitiesContainer">
             <StatisticsEntity name="Statistics" />
             <RecentlyPlayedEntity name="Recently Played" />
             <DataEntity name="Data" />
             <OtherDataEntity name="Other Data" />
           </div>
       </div>
    );
}

function getSpotifyUsername () {
    var userAccessToken = localStorage.getItem('spotifyToken');
    var getRequest = 'https://api.spotify.com/v1/me/';
    // API endpoint
    var userProfileData = fetch(getRequest, {
        headers: {'Authorization': 'Bearer ' + userAccessToken}
    }).then(response => response.json()).then((data) => {
        console.log("user profile data:")
        console.log(data);
        return data;
    })
    console.log("data:" + userProfileData);
    var userProfileName = userProfileData["display_name"];
    console.log("name " + userProfileName);
    return userProfileData;
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

export default OverViewData;
