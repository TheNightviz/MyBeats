import React from 'react';
import UserNav from './UserNav';
import BottomFooter from './BottomFooter';
import MyDataText from './MyDataText';
import { Bar } from "react-chartjs-2";

  const data = {
    labels: ["Rock", "Blues", "Punk", "Funk", "House", "Electronic", "Other"],
    datasets: [
      {
        label: "Genres",
        data: [65, 42, 38, 32, 28, 15, 5],
        fill: true,
        backgroundColor: "#f2C75C",
        borderColor: "rgba(33,33,33, 1)"
      }
    ]
  };

const MyData = () =>
{
       return(
       <div class = 'pageContainer'>
           <UserNav />
           <MyDataText />
           <Bar 
              data={data}
            />
           <BottomFooter />
       </div>)
}

export default MyData;