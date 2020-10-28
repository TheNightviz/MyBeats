import React from 'react';

const HomeBackGround = () =>{

    return (
        <div className='hero-container' style={{flexDirection:'column',alignItems:'center',display:'flex', objectFit:'contain'}} >
            <video src='/Videos/MusicBackground-HD 720p.mov' autoPlay loop muted style={{objectFit: 'cover', width: '101%', height: '100%', position: 'fixed', zIndex:'-1'}}></video>
            <h1 style={{textAlign:'center', color:'#F6F4E6', fontSize:'70px', marginTop:'10%'}}>Welcome to MyBeats!</h1>
            <p style={{textAlign:'center', color: '#F6F4E6', padding: '2px', width: '460px', fontSize: '15px', background: '#41444B', opacity: '0.9'}}>
                Music is more than just what flows through your ears. Music is a full
               body experience both on the dance floor and in the studio. Music is
               meant to be heard and viewed, and MyBeats gives you the power to
               do one deeper. MyBeats gives you the power to understand your music.
               Stop listening, start seeing.</p>

            </div>
    )
}




export default HomeBackGround
