import React from 'react';
import { Bar } from "react-chartjs-2";
import FavArtistText from './FavArtistText';

const OverViewData = () => {
    return (
       <div>
           <h1> This is MyOverViewData </h1>
           <FavArtistText />
            <Bar
              data={artistData}
              />
       </div>
    );
}

//Gets users top artists
function getTopArtists() {
    var returnValue = {};
    console.log("USER ACT:");
    var userAccessToken = localStorage.getItem('spotifyToken');
    console.log(userAccessToken);
    var getRequest = 'https://api.spotify.com/v1/me/top/artists';
    // API endpoint
    console.log("TOP ARTISTS:");
    var myTopArtists = fetch(getRequest, {
        headers: {'Authorization': 'Bearer ' + userAccessToken}
    }).then(response => response.json()).then((data) => {
        returnValue = data;
        console.log(data);
        return data;
    })
   
    return returnValue;
   // return myTopArtists.then(response => response.json()).then(data);
}

var userAccessToken = localStorage.getItem('spotifyToken');
    console.log(userAccessToken);
    var getRequest = 'https://api.spotify.com/v1/me/top/artists';
    // API endpoint
    console.log("TOP ARTISTS:");
    var artists = fetch(getRequest, {
        headers: {'Authorization': 'Bearer ' + userAccessToken}
    }).then(response => response.json()).then((data) => {
        return data;
    })

    const getArtists = async () => {
       const myArtists = await artists;
       console.log(await myArtists);
       var test2 = await artists;
       return test2;
    }

   
    var objTest = {}
    //(getArtists().then((value) => objTest = { ... value}));

      const artistData = {
        labels: ["test"],
        datasets: [
          {
            label: "Artist",
            data: [57, 51, 34, 37, 33, 24, 22],
            fill: true,
            backgroundColor: "#f2C75C",
            borderColor: "rgba(33,33,33, 1)"
          }
        ]
      };
      
export default OverViewData;
