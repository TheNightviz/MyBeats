import React from 'react';
import { userAccessToken } from './OverView';

const OverViewData = () => {
    return (
       <div>
           <h1> This is MyOverViewData </h1>
           <GetTopArtists />
       </div>
    );
}

//Gets users top artists
function GetTopArtists() {
    console.log("USER ACT:");
    console.log(userAccessToken);
    var getRequest = 'https://api.spotify.com/v1/me/top/artists';
    // API endpoint
    console.log("TOP ARTISTS:");
    fetch(getRequest, {
        headers: {'Authorization': 'Bearer ' + userAccessToken}
    }).then(response => response.json()).then((data) => {
        console.log(data);
        return data;
    })
    return (
       <div>
          <h1> Data printed to console </h1>
       </div>
    )
}

export default OverViewData;
