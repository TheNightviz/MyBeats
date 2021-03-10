import React from 'react';
import UserNav from '../UserNav';
import BottomFooter from '../BottomFooter';
import ConnectAlert from '../Overview/ConnectAlert';
import OverViewData from '../Overview/OverViewData';
import { get } from 'request';
/*import {isLoggedIn} from './Spotify/server.js';*/

class OverView extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        localStorage.setItem('isLoggedIn', false);
      }

       // Grabs URL after 'OverView' and parses access token. Will return empty string if user not logged in
       getAccessToken() {
          var queryString = window.location.search;
          console.log(queryString);
          if (queryString.length < 15) {
            console.log('accessToken is too small');
            localStorage.setItem('isLoggedIn', false);
          }
          this.checkAccessToken();
          var accessToken = '';
          if (queryString.length > 15) {
             accessToken = queryString.slice(14, queryString.length);
             console.log("accessToken changed to: " + accessToken);
              localStorage.setItem('spotifyToken', accessToken);
              localStorage.setItem('isLoggedIn', true);
          }
          return accessToken;
       }

       checkAccessToken = async () =>  {
          var accessToken = localStorage.getItem('spotifyToken');
          await fetch('https://api.spotify.com/v1/me/top/artists', {
               headers: {'Authorization': 'Bearer ' + accessToken}
          }).then(function(response){
               if (!response.ok){
                   console.log("token was not valid");
                   localStorage.setItem('isLoggedIn', false);
                   return;
               }
               if (response.ok){
                   console.log("token was valid");
                   localStorage.setItem('isLoggedIn', true);
                   return;
               }
          });
          if ((localStorage.getItem('isLoggedIn')) === 'false') {
             console.log("accessToken is not valid; isLoggedIn is false");
          }
          if ((localStorage.getItem('isLoggedIn')) === 'true' ) {
              console.log("accessToken = {" + accessToken + "}");
              console.log("accessToken is valid; isLoggedIn is true");
          }

        }
  
    //updates components when component is rendered
    componentWillMount() {
       console.log("-----------running componentWillMount----------");
       this.getAccessToken();
    }

    componentDidMount() {
        console.log("-----------running componentDidMount----------");
        this.setState({isLoggedIn: true});
    }
  
    render() {
        return (
            <div class='pageContainer'>
               <UserNav />
               <ShowConnectAlert isLoggedIn={localStorage.getItem('isLoggedIn')} />
               <BottomFooter />
            </div>
        )}
}

function ShowConnectAlert(props) {
    const isLoggedIn = props.isLoggedIn;
    console.log("in showConnectAlert; isLoggedIn = " + isLoggedIn);
    if (isLoggedIn === 'false'){
        console.log("showing connect alert");
        return <ConnectAlert />;
    }
    else {
        console.log("showing overview Data" + localStorage.getItem('firstLogin'));
        if (localStorage.getItem('firstLogin') === null) {
            console.log("firstLogin was: " + localStorage.getItem('firstLogin'));
            localStorage.setItem('firstLogin', false);
            console.log("firstLogin is now: " + localStorage.getItem('firstLogin'));
            window.location.reload();
        }
        return <OverViewData />;
    }
}

/* DOCUMENTATION FOR GETTING DATA

fetch(API_ENDPOINT)

*/

/*
fetchDataTest();

function fetchDataTest() {
    var accessToken = localStorage.getItem('spotifyToken');
    var testArtist = {
        name: "Rex Orange County",
        id: "7pbDxGE6nQSZVfiFdq9lOL"
    };
    var testArtist2 = {
        name: "Kendrick Lamar",
        id: "2YZyLoL8N0Wb9xBt1NhZWg"
    };
    var testArtist3 = {
        name: "Dillon Francis",
        id: "5R3Hr2cnCCjt220Jmt2xLf"
    };
    var testArtist4 = {
        name: "Porter Robinson",
        id: "3dz0NnIZhtKKeXZxLOxCam"
    };
    var testArtist5 = {
        name: "Kanye West",
        id: "5K4W6rqBFWDnAN6FQUkS6x"
    };
    var getRequest = 'https://api.spotify.com/v1/artists/' + testArtist4.id;
    // API endpoint
    fetch(getRequest, {
        headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json()).then((data) => {
        console.log(data);
        return data;
    })
}
**/

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

export default OverView;
/* test code for testing access token, remove later
fetch('https://api.spotify.com/v1/me/top/artists', {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('spotifyToken')}
        }).then(function(response){
            if (!response.ok){
                console.log("beep!")
            }});
            */