import React from 'react';
import FavSongText from './FavSongText';
import { Bar } from "react-chartjs-2";


const data = {
  labels: ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5", "Song 6", "Song 7"],
  datasets: [
    {
      label: "Genres",
      data: [65, 42, 38, 32, 28, 15, 5],
      fill: true,
      backgroundColor: "#f2C75C",
      borderColor: "rgba(33,33,33, 1)",
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "white",
            min: 0,
            stepSize: 1
          },
        scaleLabel: {
          display: true,
          fontColor: "white",
        }
        }],
        xAxis: [{
          ticks: {
            fontColor: "white"
          },
          scaleLabel: {
            display: true,
            fontColr: "white"
          }
        }]
      }
    }
  ]
};




  const FavArtistEntity = () =>{
    return(
      <div class = 'favSongContainer' id="song">
        <FavSongText />
        <Bar 
              data={data}
            />
        </div>
    )
  
 
}

  export default FavArtistEntity;