import React from 'react';
import HomeRotatingText from './HomeRotatingText';
import landingText from './css/landingText.css';

const LandingBackGround = () =>{

    return (
        <div className='hero-container' style={{flexDirection:'column',alignItems:'center',display:'flex', objectFit:'contain'}} >
            <video src='/Videos/MusicBackground-HD 720p.mov' autoPlay loop muted style={{
               objectFit: 'cover',
               width: '100%',
               height: 'auto',
               position: 'absolute', zIndex:'-3'}}></video>
            <div class='landingDiv'>

              <HomeRotatingText />

              <p class='landingText' style={{
                 textAlign:'center',
                 color: '#F6F4E6',
                 background: '#41444b',
                 padding: '20px',
                 margin: '5px',
                 marginBottom: '20px',
                 width: '100%',
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
        </div>
    )
}

export default LandingBackGround
