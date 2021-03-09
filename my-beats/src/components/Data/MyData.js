import React from 'react';
import UserNav from '../UserNav';
import BottomFooter from '../BottomFooter';
import DataEntities from './DataEntities';
import GenreEntity from './GenreEntity';
import FavArtistEntity from './FavArtistEntity';
import FavoriteSongEntity from './FavoriteSongEntity';
import ListeningEntity from './ListeningEntity';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';


const onButtonClick = () => {
    let domElement = window.document.getElementsByClassName("mygraph")[0];
    htmlToImage.toPng(domElement)
      .then(function (dataUrl) {
        console.log(dataUrl);
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, 'PNG', 15, 0, 300, 495);
        pdf.save("MyBeats_Data.pdf");
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
      window.open('http://facebook.com', "_blank")  
    };
const MyData = () =>
{
       return(
       <div class = 'mydataPageContainer'>
           <UserNav />
           <h5 class="mydataHeader">Click on any category below to see your Data.</h5>
          <DataEntities />
          <div class = 'mygraph'>
         <GenreEntity />
          <FavArtistEntity />
          <ListeningEntity />
          <FavoriteSongEntity />
          <button class='button' onClick={onButtonClick}>Download My Music Data And Share To Facebook</button>
          <BottomFooter />
          </div>
       </div>)
}

export default MyData;