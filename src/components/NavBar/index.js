import React, {useEffect, useState}from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks} from './NavBarElement';
import { animateScroll as scroll } from 'react-scroll';
const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav]= useState(false);
    const changeNav=()=>{
        if(window.scrollY>= 80 )
        {setScrollNav(true); }
        else
        setScrollNav(false);
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)},[])
   const toggleHome=()=>{
    scroll.scrollToTop();
   }
  return (
    <> 
    <IconContext.Provider value={{color: '#fff'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
             <NavLogo to='/' onClick={toggleHome}>Afucent</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon >
            <NavMenu> 
                <NavItems>
                    <NavLinks to='/' onClick={toggleHome}  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home </NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About </NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='services'  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services </NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='contact'  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Testimonials</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='contact'  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact-Us </NavLinks>
                </NavItems>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
     </>
  )
}

export default NavBar