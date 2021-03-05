import React from 'react';
import '../../css/overview.css';

const { StatisticsEntity, RecentlyPlayedEntity, RecommendEntity, OtherDataEntity } = require('./Entity.js');


const OverViewData = () => {
    return (
       <div class="overviewPageContainer">
           <getSpotifyUsername />
           <Welcome />
           <h5 class="overviewHeader" id="headersubtext"> Your daily overview is ready.
            You can also check out more stats on the <a id="mydatalink" href='/MyData'>MyData page</a>.</h5>
           <div class="overviewEntitiesContainer">
             <StatisticsEntity name="Statistics" />
             <RecentlyPlayedEntity name="Recently Played" />
             <RecommendEntity name="Recommended Tracks" />
             <OtherDataEntity name="Other Data" />
           </div>
       </div>
    );
}

/*
  fetches user profile data from API and returns it in "data". This data will
  to be fetched in an "async() / await" call as exampled below in the Welcome
  class
**/
const userProfileData = fetch('https://api.spotify.com/v1/me/', {
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('spotifyToken')}
}).then(response => response.json()).then((data) => {
    console.log("user profile data:")
    console.log(data);
    return data;
})


/*
  Gets the spotify username from 'userProfileData' and updates a welcome header.
**/
class Welcome extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       username: ""
     };
   }

   //updates username to spotify display name
   getSpotifyUsername = async () => {
       const data = await userProfileData;
       this.setState({ username: data.display_name });
   };

   //calls getSpotifyUsername when component is rendered
   componentDidMount() {
     this.getSpotifyUsername();
   }

   render() {
     return <h1 class="overviewHeader"> Welcome, {this.state.username}!</h1>;
   }
}


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

//export { userProfileData };

export default OverViewData;
