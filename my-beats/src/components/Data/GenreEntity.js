import MyDataText from './MyDataText';
import { Bar } from "react-chartjs-2";
import FavArtistText from './FavArtistText';

  const GenreEntity = {

    
    labels: ["Rock", "Blues", "Punk", "Funk", "House", "Electronic", "Other"],
    datasets: [
      {
        label: "Genres",
        data: [65, 42, 38, 32, 28, 15, 5],
        fill: true,
        backgroundColor: "#f2C75C",
        borderColor: "rgba(33,33,33, 1)"
        
      }
    ],
    layout: {
      padding: {
          
          bottom: 1000
      }
  }

 
};

  export default GenreEntity;