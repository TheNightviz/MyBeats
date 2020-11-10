import React from 'react'
import '../main.css'


 // I've decided to go with a class declaration because this page requires multiple nested functions.



export default class ConnectSpotify extends React.Component {
  getHashParams() {
    // ....
  }

  getTest() {
    return [1, 3, 4];
  }

  generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


  render () {
    return (
    <h1>Test Button {this.getTest()[0]}</h1>
    
    )
  }

}

/**
 * Changed old function declaration of this page to ConnectSpotify2, to avoid compilation errors. Eventually needs to be deprecated.
 */ 


//export default ConnectSpotify;
