import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Registration from '../components/Registration'
import Login from '../components/Login'
import ConnectSpotify from '../components/ConnectSpotify'


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