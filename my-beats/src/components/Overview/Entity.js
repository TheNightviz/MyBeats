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

/*
  fetches user's saved albums from API and returns it in "data"
**/

const userSavedAlbums = fetch('https://api.spotify.com/v1/me/albums?limit=50&offset=' + 0, {
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('spotifyToken')}
}).then(response => response.json()).then((data) => {
    console.log("user saved albums:")
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
       lastActiveDate: "",
       lastActiveTime: ""
      };
    }

    //updates followerCount to num spotify followers
    getSpotifyFollowers = async () => {
        const data = await userProfileData;
        this.setState({ followerCount: data.followers.total });
    };
      
    //parses saved tracks @ rate of 50/loop (max limit) and sets this.savedTracks to total saved tracks
    getSavedTracks = async () => {
        const data = await userSavedTracks;
        this.setState({ savedTracks: data.total});
    };

    //parses saved albums @ rate of 50/loop (max limit) and sets this.savedAlbums to total saved albums
    getSavedAlbums = async () => {
      const data = await userSavedAlbums;
      this.setState({ savedAlbums: data.total});
    };

    getRecentlyPlayed = async () => {
      const data = await userRecentlyPlayed;
      var time = data.items[0].played_at.substring(11,16);
      var date = data.items[0].played_at.substring(5, 10) + "-" + data.items[0].played_at.substring(0, 4) ;
      this.setState({ lastActiveDate: date,
                      lastActiveTime: time
      });
    };

    //updates components when component is rendered
    componentDidMount() {
      if (localStorage.getItem('isLoggedIn') === 'true') {
         this.getSpotifyFollowers();
         this.getSavedTracks();
         this.getSavedAlbums();
         this.getRecentlyPlayed();
      }
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
                <h5 class='entityComponent'>Last Active: </h5><h5 class='entityComponent righttextalign'>{this.state.lastActiveDate} at {this.state.lastActiveTime}</h5>
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
        song1img: '',
        song2artist: '',
        song2title: '',
        song2img: '',
        song3artist: '',
        song3title: '',
        song3img: '',
        song4artist: '',
        song4title: '',
        song4img: '',
        song5artist: '',
        song5title: '',
        song5img: ''
        
      }
    }

    getRecentlyPlayed = async () => {
      const data = await userRecentlyPlayed;
      this.setState({ song1artist: data.items[0].track.artists[0].name,
                      song2artist: data.items[1].track.artists[0].name,
                      song3artist: data.items[2].track.artists[0].name,
                      song4artist: data.items[3].track.artists[0].name,
                      song5artist: data.items[4].track.artists[0].name,
                      song1title: data.items[0].track.name,
                      song2title: data.items[1].track.name,
                      song3title: data.items[2].track.name,
                      song4title: data.items[3].track.name,
                      song5title: data.items[4].track.name,
                      song1img: data.items[0].track.album.images[2].url,
                      song2img: data.items[1].track.album.images[2].url,
                      song3img: data.items[2].track.album.images[2].url,
                      song4img: data.items[3].track.album.images[2].url,
                      song5img: data.items[4].track.album.images[2].url,
      });
    };

    componentDidMount() {
      if (localStorage.getItem('isLoggedIn') === 'true') {
        this.getRecentlyPlayed();
      }
    }

    render() {
      return (
            <div class='entityContainer wide'>
              <h2 class='entityHeader'> {this.name} </h2>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song1img} alt='song1_cover' class='songCover'></img>"<i>{this.state.song1title}</i>" - {this.state.song1artist}  </h5>
              </div>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song2img} alt='song2_cover' class='songCover'></img>"<i>{this.state.song2title}</i>" - {this.state.song2artist}  </h5>
              </div>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song3img} alt='song3_cover' class='songCover'></img>"<i>{this.state.song3title}</i>" - {this.state.song3artist}  </h5>
              </div>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song4img} alt='song4_cover' class='songCover'></img>"<i>{this.state.song4title}</i>" - {this.state.song4artist}  </h5>
              </div>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song5img} alt='song5_cover' class='songCover'></img>"<i>{this.state.song5title}</i>" - {this.state.song5artist}  </h5>
              </div>
            </div>
      );
    }
}

class RecommendEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
      this.state = {
        seed_tracks: '',
        song1title: '',
        song1artist: '',
        song1img: '',
        song2title: '',
        song2artist: '',
        song2img: '',
        song3title: '',
        song3artist: '',
        song3img: '',
        song4title: '',
        song4artist: '',
        song4img: '',
        song5title: '',
        song5artist: '',
        song5img: ''
      }
    }

    getReccomended = async () => {
      console.log("wait for seeeeeeeeed");
      const data = await userRecentlyPlayed;
      console.log("done seed");
      this.setState ({ seed_tracks: data.items[0].track.id + '%2C'
                                  + data.items[1].track.id + '%2C'
                                  + data.items[2].track.id + '%2C'
                                  + data.items[3].track.id + '%2C'
                                  + data.items[4].track.id})

      const reccs = await fetch('https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=' + this.state.seed_tracks, {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('spotifyToken')}
        }).then(response => response.json()).then((reccSongs) => {
        console.log("user reccomended:")
        console.log(reccSongs);
        return reccSongs;
        })
      this.setState ({ song1title: reccs.tracks[0].name,
                       song1artist: reccs.tracks[0].artists[0].name,
                       song2title: reccs.tracks[1].name,
                       song2artist: reccs.tracks[1].artists[0].name,
                       song3title: reccs.tracks[2].name,
                       song3artist: reccs.tracks[2].artists[0].name,
                       song4title: reccs.tracks[3].name,
                       song4artist: reccs.tracks[3].artists[0].name,
                       song5title: reccs.tracks[4].name,
                       song5artist: reccs.tracks[4].artists[0].name,
                       song1img: reccs.tracks[0].album.images[2].url,
                       song2img: reccs.tracks[1].album.images[2].url,
                       song3img: reccs.tracks[2].album.images[2].url,
                       song4img: reccs.tracks[3].album.images[2].url,
                       song5img: reccs.tracks[4].album.images[2].url
      })
    }
   
    componentDidMount() {
      if (localStorage.getItem('isLoggedIn') === 'true') {
         this.getReccomended();
      }
    }

    render() {
      return (
            <div class='entityContainer wide bottomEntity'>
              <h2 class='entityHeader'>{this.name}</h2>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song1img} alt='song1_cover' class='songCover'></img>"<i>{this.state.song1title}</i>" - {this.state.song1artist}  </h5>
              </div>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song2img} alt='song2_cover' class='songCover'></img>"<i>{this.state.song2title}</i>" - {this.state.song2artist}  </h5>
              </div>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song3img} alt='song3_cover' class='songCover'></img>"<i>{this.state.song3title}</i>" - {this.state.song3artist}  </h5>
              </div>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song4img} alt='song4_cover' class='songCover'></img>"<i>{this.state.song4title}</i>" - {this.state.song4artist}  </h5>
              </div>
              <div class='songContainer'>
                <h5 class='entityComponent recentlyPlayedSong'><img src={this.state.song5img} alt='song5_cover' class='songCover'></img>"<i>{this.state.song5title}</i>" - {this.state.song5artist}  </h5>
              </div>
            </div>
      );
    }
}

class OtherDataEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
      this.state = {
        seed_tracks: '',
        _dancability: 0,
        _energy: 0,
        _speechiness: 0,
        _acousticness: 0,
        _instrumentalness: 0,
        _liveness: 0,
        _valence: 0,
        _tempo: 0
      }
    }

    //!!this method only calculates attributes for the first 50 saved songs in a user's profile!!
    addAttributes = async () => {
        const data = await userSavedTracks;
        var i = 0;
        this.setState ({seed_tracks: data.items[0].track.id})
        var numSongs = Math.min(data.total, 50);
        for (i=1; i<numSongs; i++) {
          this.setState ({ seed_tracks: this.state.seed_tracks + '%2C'+ data.items[i].track.id})
        }
        const tracks = await fetch('https://api.spotify.com/v1/audio-features?ids=' + this.state.seed_tracks, {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('spotifyToken')}
        }).then(response => response.json()).then((tracks) => {
        console.log("attrrubutes:")
        console.log(tracks);
        return tracks;
        })
        for (i=0; i<numSongs; i++)
        {
          this.setState ({_dancability: this.state._dancability + tracks.audio_features[i].danceability,
                          _energy: this.state._energy + tracks.audio_features[i].energy,
                          _speechiness: this.state._speechiness + tracks.audio_features[i].speechiness,
                          _acousticness: this.state._acousticness + tracks.audio_features[i].acousticness,
                          _instrumentalness: this.state._instrumentalness + tracks.audio_features[i].instrumentalness,
                          _liveness: this.state._liveness + tracks.audio_features[i].liveness,
                          _valence: this.state._valence + tracks.audio_features[i].valence,
                          _tempo: this.state._tempo + tracks.audio_features[i].tempo
          })
        }
        this.setState ({    _dancability: this.state._dancability/numSongs,
          _energy: this.state._energy/numSongs,
          _speechiness: this.state._speechiness/numSongs,
          _acousticness: this.state._acousticness/numSongs,
          _instrumentalness: this.state._instrumentalness/numSongs,
          _liveness: this.state._liveness/numSongs,
          _valence: this.state._valence/numSongs,
          _tempo: this.state._tempo/numSongs
        })
    }

    componentDidMount() {
      if (localStorage.getItem('isLoggedIn') === 'true') {
         this.addAttributes();
      }
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2 class='entityHeader'>{this.name}</h2>
              <div>
                <h5 class='entityComponent'>Dancability: </h5><h5 class='entityComponent righttextalign'>{Math.round(100*this.state._dancability)}/100</h5>
              </div>
              <div style={{clear: 'both'}}></div>
              <div>
                <h5 class='entityComponent'>Energy: </h5><h5 class='entityComponent righttextalign'>{Math.round(100*this.state._energy)}/100</h5>
              </div>
              <div style={{clear: 'both'}}></div>
              <div>
                <h5 class='entityComponent'>Acousticness: </h5><h5 class='entityComponent righttextalign'>{Math.round(100*this.state._acousticness)}/100</h5>
              </div>
              <div style={{clear: 'both'}}></div>
              <div>
                <h5 class='entityComponent'>Instrumentalness: </h5><h5 class='entityComponent righttextalign'>{Math.round(100*this.state._instrumentalness)}/100</h5>
              </div>
              <div style={{clear: 'both'}}></div>
              <div>
                <h5 class='entityComponent'>Liveness: </h5><h5 class='entityComponent righttextalign'>{Math.round(100*this.state._liveness)}/100</h5>
              </div>
              <div style={{clear: 'both'}}></div>
              <div>
                <h5 class='entityComponent'>Valence: </h5><h5 class='entityComponent righttextalign'>{Math.round(100*this.state._valence)}/100</h5>
              </div>
              <div style={{clear: 'both'}}></div>
              <div>
                <h5 class='entityComponent'>Tempo (beats per minute): </h5><h5 class='entityComponent righttextalign'>{Math.round(this.state._tempo)} bpm</h5>
              </div>
              <div style={{clear: 'both'}}></div>
            </div>
      );
    }
}


export { StatisticsEntity, RecentlyPlayedEntity, RecommendEntity, OtherDataEntity }
