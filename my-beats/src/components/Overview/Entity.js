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
       savedTracks: -1,
       savedAlbums: -1,
       totalPlaybackTime: -1
      };
    }

    //updates followerCount to num spotify followers
    getSpotifyFollowers = async () => {
        const data = await userProfileData;
        this.setState({ followerCount: data.followers.total });
    };
      
    //parses saved tracks @ rate of 50/loop (max limit) and sets this.savedTracks to total saved tracks
    getSavedTracks = async () => {
        /*
        var totalSavedTracks = 0;
        var offset = 0;
        var isDoneParsing = false;
        */
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
              <div>
                <h5 class='entityComponent'>Follower Count: </h5><h5 class='entityComponent righttextalign'>{this.state.followerCount}</h5>
              </div>
              <div style={{clear: 'both'}}></div>
              <div>
                <h5 class='entityComponent'>Liked Tracks: </h5><h5 class='entityComponent righttextalign'>{this.state.savedTracks}</h5>
              </div>
              <div style={{clear: 'both'}}></div>
              <div>
                <h5 class='entityComponent'>Liked Albums: </h5><h5 class='entityComponent righttextalign'>{this.state.savedAlbums}</h5>
              </div>
              <div style={{clear: 'both'}}></div>
              <div>
                <h5 class='entityComponent'>Playback Time: </h5><h5 class='entityComponent righttextalign'>{this.state.totalPlaybackTime}</h5>
              </div>
              <div style={{clear: 'both'}}></div>
            </div>
      );
    }
}

const userRecentlyPlayed = fetch('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
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
        song1artist: '',
        song1title: '',
        song2artist: '',
        song2title: '',
        song3artist: '',
        song3title: '',
        song4artist: '',
        song4title: '',
        song5artist: '',
        song5title: '',
        
      }
    }

    getRecentlyPlayed = async () => {
      const data = await userRecentlyPlayed;
      this.setState({ song1artist: data.items[0].track.artists[0].name});
      this.setState({ song2artist: data.items[1].track.artists[0].name});
      this.setState({ song3artist: data.items[2].track.artists[0].name});
      this.setState({ song4artist: data.items[3].track.artists[0].name});
      this.setState({ song5artist: data.items[4].track.artists[0].name});
      this.setState({ song1title: data.items[0].track.name});
      this.setState({ song2title: data.items[1].track.name});
      this.setState({ song3title: data.items[2].track.name});
      this.setState({ song4title: data.items[3].track.name});
      this.setState({ song5title: data.items[4].track.name});
    };

    componentDidMount() {
      this.getRecentlyPlayed();
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2 class='entityHeader'> {this.name} </h2>
              <h5 class='entityComponent recentlyPlayedSong'>"<i>{this.state.song1title}</i>" - {this.state.song1artist} </h5>
              <h5 class='entityComponent recentlyPlayedSong'>"<i>{this.state.song2title}</i>" - {this.state.song2artist}  </h5>
              <h5 class='entityComponent recentlyPlayedSong'>"<i>{this.state.song3title}</i>" - {this.state.song3artist}  </h5>
              <h5 class='entityComponent recentlyPlayedSong'>"<i>{this.state.song4title}</i>" - {this.state.song4artist}  </h5>
              <h5 class='entityComponent recentlyPlayedSong'>"<i>{this.state.song5title}</i>" - {this.state.song5artist}  </h5>
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
