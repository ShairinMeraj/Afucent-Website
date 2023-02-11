import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/SectionBanner/Banner";
import AboutImg from "../images/three.jpg";
import Card from "../components/Cards/Card";
import Services from "../components/Services";
import Card2 from "../components/Cards/Card2";
function Expertise() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }; 
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Expertise" btnClass="hide" />
      <Services/>
      <Card/> 
     <Card2/>
    
      <Footer/>
    </>
  )
}

  export default Expertise;