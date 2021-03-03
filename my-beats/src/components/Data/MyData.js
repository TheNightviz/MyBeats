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
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import html2canvas from "html2canvas";


const onButtonClick = () => {
    let domElement = window.document.getElementsByClassName("mydataPageContainer")[0];
    htmlToImage.toPng(domElement)
      .then(function (dataUrl) {
        console.log(dataUrl);
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, 'PNG', 15, 0, 300, 525);
        pdf.save("MyBeats_Data.pdf");
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
    //e.preventDefault();
    window.open('http://facebook.com', "_blank")  
    };
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
          <div>
        <button class='button' onClick={onButtonClick}>Download My Music Data And Share To Facebook</button>
        </div>
       </div>)
}

export default MyData;