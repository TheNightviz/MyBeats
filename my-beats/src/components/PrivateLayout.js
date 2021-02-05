import MyAccount from '../components/Account/MyAccount';
import LogOut from '../components/MyBeatsAuth/LogOut';
import MyData from '../components/Data/MyData';
import OverView from '../components/Overview/OverView'
import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'


class PrivateLayout extends Component {
    render() {
      return (
        <div>


          <Route exact path='/MyData' component={MyData} />
          <Route exact path='/MyAccount' component={MyAccount} />
          <Route exact path='/Logout' component={LogOut} />
          <Route exact path='/OverView' component={OverView} />

        </div>
      );
    }
  }

  export default PrivateLayout;
