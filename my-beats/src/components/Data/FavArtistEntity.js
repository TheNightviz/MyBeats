import React from 'react';
import FavArtistText from './FavArtistText';
import { Bar } from "react-chartjs-2";


const artistData = {
    labels: ["Kanye West", "Eminem", "Lil Wayne", "Post Malone", "21 Savage", "Drake", "Future"],
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




  const FavArtistEntity = () =>{
    return(
      <div class = 'myArtistContainer' id="artist">
        <FavArtistText />
        <Bar 
              data={artistData}
            />
        </div>
    )
  
 
}

  export default FavArtistEntity;