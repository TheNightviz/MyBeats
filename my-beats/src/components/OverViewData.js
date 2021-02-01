import React from 'react';
import { Bar } from "react-chartjs-2";
import FavArtistText from './FavArtistText';
import BottomFooter from './BottomFooter';


const OverViewData = () => {
    return (
       <div>
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
       return await myArtists;
    }

    const artistData = {
        labels: ["Queens of the Stone Age", "Joywave", "Hozier", "Taylor Swift", "The Chats", "Florence + The Machine", "The Oh Hellos", "Sabaton", "Marcin Przybyłowicz", "Best Frenz", "Them Crooked Vultures", "Wolfmother", "Eagles Of Death Metal", "Red Hot Chili Peppers", "Kyuss"],
        datasets: [
        {
            label: "Artist",
            data: [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            fill: true,
            backgroundColor: "#f2C75C",
            borderColor: "rgba(33,33,33, 1)"
        }
        ]
    };
        
export default OverViewData;
