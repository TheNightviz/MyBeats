import React from 'react';
import Entity from '../Overview/Entity.js';
// import FavArtistEntity from './Data/FavArtistEntity';

const DataEntities = () =>{

    return (
       
<div class="grid-container">
  <div>
  <a href="#genre"><img src = '/Photos/music.png' style={{padding:'10px', width:'100px', height:'100px'}}></img></a>
      <div>Favorite Genre</div>
  </div>

  <div>
    <a href="#artist"><img src = '/Photos/mic.png' style={{padding:'10px', width:'55px', height:'100px'}}></img></a>
      <div>Favorite Artists</div>
    </div>

  <div>
    <a href="#listen"><img src = '/Photos/graph.png' style={{padding:'10px', width:'100px', height:'100px'}}></img></a>
      <div>Listening Time</div>
    </div>
    
  <div>
    <a href="#song"><img src = '/Photos/instrument.png' style={{padding:'10px', width:'90px', height:'100px'}}></img></a>
      <div>Favorite Songs</div>
    </div>
  

{/* <Entity name="Favorite Genres" />
<Entity name="Favorite Artists" />
<Entity name="Listening Time" />
<Entity name="Favorite Song" /> */}
           

</div>


    )
}

export default DataEntities