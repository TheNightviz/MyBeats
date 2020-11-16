import React from 'react';
import rotatingTextStyle from './css/rotatingTextStyle.css';

const HomeBackGround = () =>{

    return (
        <div className='hero-container' style={{flexDirection:'column',alignItems:'center',display:'flex', objectFit:'contain'}} >
            <video src='/Videos/MusicBackground-HD 720p.mov' autoPlay loop muted style={{
               objectFit: 'cover',
               width: '100%',
               height: 'auto',
               position: 'absolute', zIndex:'-3'}}></video>

            <h1 class='sticky' id='baseText' style={{float:'left', textAlign:'left'}}>your beats<span style={{color: '#f2C75C'}}> Visualized</span></h1>
        </div>
    )
}

export default HomeBackGround
