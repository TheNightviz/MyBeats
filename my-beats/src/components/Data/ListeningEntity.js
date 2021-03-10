import React from 'react';
import ListeningText from './ListeningText';
import { Bar } from "react-chartjs-2";


const listeningTime = {
    labels: ["Example 1", "Example 2", "Example 3", "Example 4", "Example 5", "Example 6", "Example 7"],
    datasets: [
      {
        label: "Artist",
        data: [57, 51, 34, 37, 33, 24, 22],
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




  const ListeningEntity = () =>{
    return(
      <div class = 'myArtistContainer' id="listen">
        <ListeningText />
        <Bar 
              data={listeningTime}
            />
        </div>
    )
  
 
}

  export default ListeningEntity;