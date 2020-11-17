import React from 'react';
import Navbar from './Navbar';
import BottomFooter from './BottomFooter';
import {Link } from "react-router-dom";


const LogOut = () =>
{
       return(
       <div class='pageContainer' >
              <Navbar />
              <h1
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "40px",
            marginTop: "10%",
          }}
        >
          You have logged out.
        </h1>
        <h6
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "20px",
            marginBottom: "-8%",
          }}
        >
          Thank you for using MyBeats.
        </h6>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
               
               <Link to="/Login">
               <button
              type="submit"
              className="btn btn-primary btn-b grey darken-1"
               style={{ color: "#f2C75C"}}>
              Sign In Again
              </button>
               
               </Link>
               </div>
           <BottomFooter />
       </div>)

}

export default LogOut;
