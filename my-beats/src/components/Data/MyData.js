import React from 'react';
import UserNav from '../UserNav';
import BottomFooter from '../BottomFooter';
import myDataStyle from '../../css/myData.css';
import DataEntities from './DataEntities';
import myDataText from './MyDataText';
import GenreEntity from './GenreEntity';
import FavArtistEntity from './FavArtistEntity';
import FavoriteSongEntity from './FavoriteSongEntity';


import FavArtistText from './FavArtistText';
import ListeningEntity from './ListeningEntity';




const MyData = () =>
{
       return(
       <div class = 'mydataPageContainer'>
           <UserNav />
           <h5 class="mydataHeader">Click on any category below to see your Data.</h5>
          <DataEntities />
          <GenreEntity />
          <FavArtistEntity />
          <ListeningEntity />
          <FavoriteSongEntity />
           <BottomFooter />
       </div>)
}

export default MyData;