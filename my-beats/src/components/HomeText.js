import React from 'react'

const Home = () => {
    return (

       <div>
           <p class='landingText' style={{
              textAlign:'center',
              position: 'absolute',

              marginTop: '45vw',
              color: '#F6F4E6',
              background: 'rgb(33,33,33, 1)',
              padding: '40px',
              width: '100%',
              minWidth: '800px',
              fontSize: '30px',
              }}>
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

       </div>


    );
}
export default Home;
