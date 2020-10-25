import React from 'react';

const HomeBackGround = () =>{
    
    return (
        <div className='hero-container' style={{flexDirection:'column',alignItems:'center',display:'flex', objectFit:'contain'}} >
            <video src='/Videos/Music.mp4' autoPlay loop muted style={{objectFit: 'cover', width: '100%', height: '100', position: 'fixed', zIndex:'-1'}}></video>
            <h1 style={{textAlign:'center', color:'white', fontSize:'70px', marginTop:'10%'}}>Welcome to MyBeats!</h1>
            <p style={{textAlign:'center', color: '#41444b', padding: '2px', width: '460px', fontSize: '15px', background: '#f6f4e6'}}>
                Music is more than just what flows through your ears. Music is a full
               body experience both on the dance floor and in the studio. Music is
               meant to be heard and viewed, and MyBeats gives you the power to
               do one deeper. MyBeats gives you the power to understand your music.
               Stop listening, start seeing.</p>

                
            </div>
    )
}
        
        
        

export default HomeBackGround


