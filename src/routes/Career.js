import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/SectionBanner/Banner";
import CareerImg from "../images/career.png";
import AboutSection from "../components/AboutUS/AboutSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import Careers from "../components/Career/Careers";

function Career() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={CareerImg} title="We aim to amplify human potential and create the next opportunity for people, businesses and communities" btnClass="hide" />
      <Careers/>

      <Footer/>
    </>
  )
}

  export default Career;