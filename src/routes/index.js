import React, { useEffect, useState } from "react";
import Slider from "../components/Carousal/Slider";

import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import NavBar from "../components/NavBar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Connect from "../components/Contact/Contact";
import Careers from "../components/Career/Careers";

import K from "../components/AboutUS/AboutUs";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
    <Slider/>
    <K />
     
   
     <InfoSection  {...homeObjOne}/> 
      <InfoSection {...homeObjTwo}/>

     <InfoSection {...homeObjThree}/>
  
<Connect/>
   
      <Footer/>
     
      
      {/* <InfoSection {...homeObjThree}/> */}
    </>
  );
};

export default Home;
