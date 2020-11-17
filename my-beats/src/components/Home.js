import React from 'react'
import HomeBackGround from './HomeBackground';
import BottomFooter from './BottomFooter';
import Navbar from './Navbar';
import HomeText from './HomeText';
import mainStyle from '../main.css';

const Home = () => {
    return (

       <div class='pageContainer'>
         <Navbar />
         <HomeBackGround />
         <HomeText />
         <BottomFooter />
       </div>


    );
}
export default Home;
