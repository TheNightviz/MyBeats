import React from 'react';
import HomeRotatingText from './HomeRotatingText';
import landingText from './css/landingText.css';

const HomeBackGround = () =>{

    return (
        <div className='hero-container' style={{flexDirection:'column',alignItems:'center',display:'flex', objectFit:'contain'}} >
            <video src='/Videos/MusicBackground-HD 720p.mov' autoPlay loop muted style={{
               objectFit: 'cover',
               width: '101%',
               height: '100%',
               position: 'absolute', zIndex:'-3'}}></video>

            <HomeRotatingText />

            <p class='landingText' style={{
               textAlign:'center',
               color: '#F6F4E6',
               background: 'rgb(65, 68, 75, 0.9)',
               padding: '20px',
               margin: '5px',
               marginBottom: '20px',
               width: '40%',
               minWidth: '700px',
               fontSize: '30px',

               borderRadius: '7px',
               opacity: '1'
               }}>
                Music is more than just what flows through your ears.<br />
                <br />
                Music is a full body experience both on the dance floor and in the studio.<br />
                <br />
                MyBeats gives you the power to
                go one deeper.<br />
                MyBeats gives you the power to understand your music.<br />
                <br />
                Stop listening, start <span style={{color:'#f2C75C'}}>seeing</span>.</p>

        </div>
    )
}




export default HomeBackGround
