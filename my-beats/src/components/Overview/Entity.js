import React from 'react';
import overviewStyle from '../../css/overview.css';

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
const userSavedTracks = fetch('https://api.spotify.com/v1/me/tracks?offset=0&limit=50', {
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
       followerCount: -1
      };
    }

    //updates followerCount to num spotify followers
    getSpotifyFollowers = async () => {
        const data = await userProfileData;
        this.setState({ followerCount: data.followers.total });
    };

    //updates components when component is rendered
    componentDidMount() {
      this.getSpotifyFollowers();
      //this.countSavedTracks();
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2 class='entityHeader'>{this.name}</h2>
              <h5 class='entityComponent'> Your Follower Count: {this.state.followerCount} </h5>
            </div>
      );
    }
}

class RecentlyPlayedEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2 class='entityHeader'> {this.name} </h2>
              <h3> song 1 </h3>
              <h3> song 2 </h3>
              <h3> song 3 </h3>
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
