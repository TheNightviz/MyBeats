import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const ArtistGraph = () => {
  const [chartData, setChartData] = useState({});
  const [numSongs, setNumSongs] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  //create dynamic chart, populates with data (currently for top artists by # of tracks listened to)
  const chart = () => {
    let topArtists = {};
    var artistLabels = [];
    var offsetCount = 5;
    let numSongs = [];
    let userAccessToken = localStorage.getItem('spotifyToken');
    const optionsArtists = {
      method : 'GET',
      url : 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + userAccessToken,
      }
    }
    const optionsTracks = {
      method : 'GET',
      url : 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&offset=' + offsetCount,
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + userAccessToken,
      }
    }

    //runs axios for top artists, populates topArtists dictionary and artistLabels array
    axios(optionsArtists)
      .then(res => {
        var artistName;
        var artistLabels = [];
        console.log("DataGraph: Top Artists (50)");
        console.log(res);
        for (const artistItem of res.data.items){
          artistLabels.push(artistItem.name);
          topArtists[artistItem.name] = 0;
          console.log(artistItem.name);
        }
        //runs axios for top tracks, parses for each track and if in top artists, increments data
        axios(optionsTracks)
        .then(res2 => {
          console.log("results tracks");
          for (const trackItem of res2.data.items){
            console.log("TRACK ITEM");
            console.log(trackItem);
            for (var i=0; i < trackItem.artists.length; i++){
              console.log("artist");
              console.log(trackItem.artists[i].name);
              artistName = trackItem.artists[i].name;
              if (artistName in topArtists){
                console.log("found " + artistName);
                topArtists[artistName] = topArtists[artistName] + 1;
              }
            }
          }
          for (var x = 0; x < artistLabels.length; x++){
            numSongs.push(topArtists[(artistLabels[x])]);
          }
          console.log(res2);
          console.log("num list");
          console.log(numSongs);
          console.log(artistLabels);
        })
        .then(test =>
        {
        setChartData({
          labels: artistLabels,
          datasets: [
            {
              label: "Songs",
              data: numSongs,
              backgroundColor: "#f2C75C",
              borderWidth: 4
            }
          ]
        })});
        console.log("end process");
        console.log(topArtists, numSongs);
      })
      .catch(err => {
        console.log(err);
      });

 };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Artists", display: false },
            fill: true,
            backgroundColor: "#f2C75C",
            borderColor: "rgba(33,33,33, 1)"
            }
          }
        />
      </div>
    </div>   
  );
};

export default ArtistGraph;


/*
//Gets users top artists, old version

function getTopArtists() {
    var returnValue = {};
    console.log("USER ACT:");
    var userAccessToken = localStorage.getItem('spotifyToken');
    console.log(userAccessToken);
    var getRequest = 'https://api.spotify.com/v1/me/top/artists';
    // API endpoint
    console.log("TOP ARTISTS:");
    fetch(getRequest, {
        headers: {'Authorization': 'Bearer ' + userAccessToken}
    }).then(response => response.json()).then((data) => {
        returnValue = data;
        console.log(data);
        return data;
    }).then(function(data) {
        console.log("DATA!");
        console.log(data);
        data.items.forEach((artist) => {artistData.labels.push(artist.name);});
        console.log(artistData);
        let testChart = this.reference.chartInstance;
        testChart.update();
    })

   // return myTopArtists.then(response => response.json()).then(data);
}
/*
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

      class ArtistGraph extends React.Component {
        chartReference = {};
        constructor(props) {
          super(props);
          this.chartReference = React.createRef();
        }
      
        componentDidMount() {
          console.log(this.chartReference); // returns a Chart.js instance reference
          getTopArtists();
        }

        render() {
          return (<Bar ref={(reference) => this.chartReference = reference} data={artistData} id={"artistGraph"}/>)
        }
      }

export default OverViewData;
*/