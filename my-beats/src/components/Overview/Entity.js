import React from 'react';
import '../../css/overview.css';

//const { userProfileData } = require('./OverViewData.js');

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
  fetches user's saved tracks from API and returns it in "data"
**/

const userSavedTracks = fetch('https://api.spotify.com/v1/me/tracks?limit=50&offset=' + 0, {
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('spotifyToken')}
}).then(response => response.json()).then((data) => {
    console.log("user saved tracks:")
    console.log(data);
    return data;
})

class StatisticsEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
      this.state = {
       followerCount: -1,
       savedTracks: -1
      };
    }

    //updates followerCount to num spotify followers
    getSpotifyFollowers = async () => {
        const data = await userProfileData;
        this.setState({ followerCount: data.followers.total });
    };
      
    //parses saved tracks @ rate of 50/loop (max limit) and sets this.savedTracks to total saved tracks
    getSavedTracks = async () => {
        var totalSavedTracks = 0;
        var offset = 0;
        var isDoneParsing = false;
        console.log('pre loop');

        const data = await userSavedTracks;
                 /*
        while(isDoneParsing == false) {
          const data = await userSavedTracks(offset);

          offset += 50;
          totalSavedTracks += data.items.length;
          console.log(data);

          if ( data.total < 50) {
             isDoneParsing = true;
          }

         isDoneParsing = true;
        }
        */
        this.setState({ savedTracks: data.total});
    };

    //updates components when component is rendered
    componentDidMount() {
      this.getSpotifyFollowers();
      this.getSavedTracks();
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2 class='entityHeader'>{this.name}</h2>
              <h5 class='entityComponent'> Your Follower Count: {this.state.followerCount} </h5>
              <h5 class='entityComponent'> Number of Saved Tracks: {this.state.savedTracks} </h5>
            </div>
      );
    }
}

const userRecentlyPlayed = fetch('https://api.spotify.com/v1/me/player/recently-played?limit=4', {
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('spotifyToken')}
}).then(response => response.json()).then((data) => {
    console.log("user recently played:")
    console.log(data);
    return data;
})

class RecentlyPlayedEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
      this.state = {
        song1: '',
        song2: '',
        song3: ''
      }
    }

    getRecentlyPlayed = async () => {
      const data = await userRecentlyPlayed;
      this.setState({ song1: data.items[0]});
      this.setState({ song2: data.items[1]});
      this.setState({ song3: data.items[2]});
    };

    render() {
      return (
            <div class='entityContainer'>
              <h2 class='entityHeader'> {this.name} </h2>
              <h5 class='entityComponent'> song1: {this.state.song1} </h5>
              <h5 class='entityComponent'> song2: {this.state.song2} </h5>
              <h5 class='entityComponent'> song3: {this.state.song3} </h5>
            </div>
      );
    }
}

class DataEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2 class='entityHeader'>{this.name}</h2>
              <h4> some data </h4>
            </div>
      );
    }
}

class OtherDataEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2 class='entityHeader'>{this.name}</h2>
              <h4> some other data </h4>
            </div>
      );
    }
}


export { StatisticsEntity, RecentlyPlayedEntity, DataEntity, OtherDataEntity }
