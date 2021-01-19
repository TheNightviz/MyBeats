import React from 'react';
// import landingText from './css/landingText.css';

const Home = () => {
    return (

       <div>
           <p className='landingText'>
               Music is more than just what flows through your ears.<br />
               <br />
               Music is a full body experience both on the dance floor and in the studio.<br />
               <br />
               MyBeats gives you the power to
               go one deeper.<br />
               MyBeats gives you the power to understand your music.<br />
               <br />
               <span style={{fontSize: '70px'}}>
                 Stop listening, start <span style={{color:'#f2C75C'}}>seeing</span>.
               </span>
               <br />
           </p>
            <div id='landingIconContainer'>
              <p className='landingSubtext'>All your beats, all in one place.</p>
              <img className='landingIcons' src='/Photos/spotifyicon.png' alt='Spotify'></img>
              <img className='landingIcons' src='/Photos/soundcloudicon.png' alt='Soundcloud'></img>
              <img className='landingIcons' src='/Photos/applemusicicon.png' alt='Apple Music'></img>
              <p className='landingSubtext'>Find data on all your beats, across all platforms.
                  <a id='regLinkText' href="/SignUpPage"> Sign up for free today and start seeing your beats.</a></p>
            </div>
            <br />

       </div>


    );
}
export default Home;
