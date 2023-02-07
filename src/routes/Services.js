import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/SectionBanner/Banner";
import AboutImg from "../images/three.jpg";
import AboutSection from "../components/AboutUS/AboutSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import Card from "../components/Cards/Card";
import Services from "../components/Services";
import Layout from "../components/SidebySide/Layout";
function Service() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Services" btnClass="hide" />
    <InfoSection  {...homeObjOne}/> 
      <InfoSection {...homeObjTwo}/>

     <InfoSection {...homeObjThree}/>
  <Layout/>
      <Card/>
     <Services/>
      <Footer/>
    </>
  )
}

  export default Service;