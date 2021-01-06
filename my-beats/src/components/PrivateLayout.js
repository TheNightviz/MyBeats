import MyAccount from '../components/MyAccount';
import LogOut from '../components/LogOut';
import MyData from '../components/MyData';
import MainPage from '../components/MainPage'
import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'


class PrivateLayout extends Component {
    render() {
      return (
        <div>
          

          <Route exact path='/MyData' component={MyData} />
          <Route exact path='/MyAccount' component={MyAccount} />
          <Route exact path='/Logout' component={LogOut} />
          <Route exact path='/MainPage' component={MainPage} />
          
        </div>
      );
    }
  }
  
  export default PrivateLayout;