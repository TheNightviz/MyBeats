import React from 'react';

const HomeBackGround = () =>{
    
    return (
        <div className='hero-container' >
            <video src='/Videos/Music.mp4' autoPlay loop muted></video>

                <div style={{ position: 'absolute', top: 0, width: '100vh',height: '100vh', display: 'flex',
                 justifyContent:'center', alignItems:'center', padding: 0}}>
                    <h1 style={{textAlign:'center', padding:'10px', color:'white'}}>Welcome to MyBeats!</h1>
                </div>
            </div>
    )
}
        
        
        

export default HomeBackGround


