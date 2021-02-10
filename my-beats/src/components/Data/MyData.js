import React from 'react';
import UserNav from '../UserNav';
import BottomFooter from '../BottomFooter';
import myDataStyle from '../../css/myData.css';
import DataEntities from './DataEntities';
import myDataText from './MyDataText';




  // const artistData = {
  //   labels: ["Kanye West", "Eminem", "Lil Wayne", "Post Malone", "21 Savage", "Drake", "Future"],
  //   datasets: [
  //     {
  //       label: "Artist",
  //       data: [57, 51, 34, 37, 33, 24, 22],
  //       fill: true,
  //       backgroundColor: "#f2C75C",
  //       borderColor: "rgba(33,33,33, 1)"
  //     }
  //   ]
  // };





const MyData = () =>
{
       return(
       <div class = 'mydataPageContainer'>
           <UserNav />
           <h5 class="mydataHeader">Click on any category below to see your Data.</h5>
          <DataEntities />
          <myDataText />

           <BottomFooter />
       </div>)
}

export default MyData;