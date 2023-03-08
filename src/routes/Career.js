import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/SectionBanner/Banner";
import CareerImg from "../images/CareerBanner.jpeg";
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
      <Banner cName="banner-mid" bannerImg={CareerImg} title="We aim to amplify human potential and enable them to effectively handle rapid changes into Technology and meet business need" btnClass="hide" />
      <Careers/>

      <Footer/>
    </>
  )
}

  export default Career;