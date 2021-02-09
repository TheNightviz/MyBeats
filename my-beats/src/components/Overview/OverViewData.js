import React from 'react';
import Entity from './Entity.js';
import overviewStyle from '../../css/overview.css';


const OverViewData = () => {
    return (
       <div class="overviewPageContainer">
           <h1 class="overviewHeader"> Welcome, userName123! </h1>
           <h5 class="overviewHeader" id="headersubtext"> Your daily overview is ready.
            You can also check out more stats on the <a id="mydatalink" href='/MyData'>MyData page</a>.</h5>
           <div class="overviewEntitiesContainer">
             <Entity name="Statistics" />
             <Entity name="Recently Played" />
             <Entity name="MusicDataEntity" />
             <Entity name="More Music Data Entity" />
           </div>
       </div>
    );
}
//should be just <Entity title="Stats" />

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
