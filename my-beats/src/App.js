import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import CreateAnAccount from './components/CreateAnAccount'
import Login from './components/Login'
import ConnectSpotify from './components/ConnectSpotify'



class App extends Component
 {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
<<<<<<< HEAD
          <Route exact path='/' component={Home} />
          <Route exact path='/CreateAnAccount' component={CreateAnAccount} />
          <Route exact path='/Login' component={Login} />
=======
          <Route exact path='/'  component={Home} />
          <Route exact path='/CreateAnAccount'  component={CreateAnAccount} />
          <Route exact path='/Login'  component={Login} />
<<<<<<< HEAD
>>>>>>> origin/master
=======
          <Route exact path='/ConnectSpotify' component={ConnectSpotify} />
>>>>>>> e76071bf0ca0d88993927cd95f69d02e11de5188

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
