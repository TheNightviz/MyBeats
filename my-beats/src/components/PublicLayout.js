import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import Registration from '../components/MyBeatsAuth/Registration'
import Login from '../components/MyBeatsAuth/Login'
import ConnectSpotify from '../components/Spotify/ConnectSpotify'


class PublicLayout extends Component {
    render() {
      return (
        <div>
         
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/SignUpPage' component={Registration} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/ConnectSpotify' component={ConnectSpotify} />
          </Switch>
        </div>
      );
    }
  }
  
  export default PublicLayout;