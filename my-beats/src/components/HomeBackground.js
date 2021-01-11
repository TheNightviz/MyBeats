import React from 'react';
//mport rotatingTextStyle from './css/rotatingTextStyle.css';

const HomeBackGround = () =>{

    return (
        <div className='hero-container' style={{flexDirection:'column',alignItems:'center',display:'flex', objectFit:'contain'}} >
            <video src='/Videos/MusicBackground-HD 720p.mov' autoPlay loop muted style={{
               objectFit: 'cover',
               width: '100%',
               height: 'auto',
               position: 'relative', zIndex:'-3'}}></video>

            <h1 className='sticky' id='baseText' style={{float:'center', textAlign:'center', marginTop: '20px'}}>your beats<span style={{color: '#f2C75C'}}> Visualized</span></h1>
        </div>
    )
}

export default HomeBackGround
