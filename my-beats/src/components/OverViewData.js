import React from 'react';
import { userAccessToken } from './OverView';
import MyDataText from './MyDataText';
import { Bar } from "react-chartjs-2";

const OverViewData = () => {
    return (
       <div>
           <h1> This is MyOverViewData </h1>
           <GetTopArtists />
           <MyDataText />
           <Bar 
              data={graphData}
            />
       </div>
    );
}

const graphData = {
    labels: ["test"],
    datasets: [
      {
        label: "Top Artists",
        data: [65, 42, 38, 32, 28, 15, 5],
        fill: true,
        backgroundColor: "#f2C75C",
        borderColor: "rgba(33,33,33, 1)"
      }
    ]
  };

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
