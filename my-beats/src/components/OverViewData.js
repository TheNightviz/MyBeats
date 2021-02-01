import React from 'react';

const OverViewData = () => {
    return (
       <div>
           <h1> This is MyOverViewData </h1>
       </div>
    );
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
