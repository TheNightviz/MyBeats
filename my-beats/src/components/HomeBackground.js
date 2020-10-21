import React from 'react';

const HomeBackGround = () =>{
    
    return (
        <div className='hero-container' >
            <video src='/Videos/Music.mp4' autoPlay loop muted></video>

                <div style={{ position: 'absolute', top: 0, width: '100vh',height: '100vh', display: 'flex',
                 justifyContent:'center', alignItems:'center', padding: 0}}>
                    <h1 style={{textAlign:'center', padding:'10px', color:'white'}}>Welcome to MyBeats!</h1>
                    <p style={{textAlign:'center', padding:'10px', color:'white'}}>
                Music is more than just what flows through your ears. Music is a full
               body experience both on the dance floor and in the studio. Music is
               meant to be heard and viewed, and MyBeats gives you the power to
               do one deeper. MyBeats gives you the power to understand your music.
               Stop listening, start seeing.</p>
                </div>
            </div>
    )
}
        
        
        

export default HomeBackGround


