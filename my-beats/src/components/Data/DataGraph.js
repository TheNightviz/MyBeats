import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const ArtistGraph = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    let userAccessToken = localStorage.getItem('spotifyToken');
    console.log("TEST1");
    const options = {
      method : 'GET',
      url : 'https://api.spotify.com/v1/me/top/artists',
      headers: {'Authorization': 'Bearer ' + userAccessToken}
    }
    axios(options)
      .then(res => {
        console.log("TEST2");
        console.log(res.data);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "Songs",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>Top Genres</h1>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Genres", display: false },
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
//Gets users top artists

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