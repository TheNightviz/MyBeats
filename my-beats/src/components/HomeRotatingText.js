import React from 'react';
import rotatingTextStyle from './css/rotatingTextStyle.css';

const HomeRotatingText = () =>{

    return (
      <div>
          <h1 class='fade' id='baseText' style={{float:'left', textAlign:'left'}}>your beats</h1>
          <h1 class='fade' style={{float:'right', textAlign:'right'}}>Visualized</h1>
      </div>
    )
}




export default HomeRotatingText
