import React, { Component } from 'react';
import Lefthomepage from "../components/lefthomepage";
import Righthomepage from "../components/righthomepage";
import SearchPage from "./searchpage";
import "./homepage.css";
import Navbar from '../components/Navbar';
 
function Homepage() {
  return (
    <>
    <Navbar/>
    <div className='homepage-maincontainer'>
        <Lefthomepage />
        <Righthomepage />
        
    </div>
    <SearchPage />
    </>
  );
}

export default Homepage;
