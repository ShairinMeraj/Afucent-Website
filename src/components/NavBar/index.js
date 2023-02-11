import React, {useEffect, useState}from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Icon3 from '../../images/AFUCENT.png';
import Dropdown from './Dropdown';
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




  const [dropdown, setDropdown] = useState(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <> 
    <IconContext.Provider value={{color: '#052257'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
             <NavLogo src={Icon3} to='/' onClick={toggleHome}/>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon >
            <NavMenu> 
                <NavItems>
               <NavLinks to='/' onClick={toggleHome}  smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home </NavLinks>
                </NavItems>
                <NavItems>
                 <NavLinks to='/service'>Services </NavLinks>
                </NavItems>
                <NavItems onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave} >
                 <NavLinks  
              to='/expertise'
   
            
            >
               Expertise 
             
            </NavLinks>
            {dropdown && <Dropdown />}
                </NavItems >
                
                <NavItems>
                <NavLinks to='/about'> About Us</NavLinks> 
                </NavItems>
                <NavItems>
                  <NavLinks to='/careers'  >Careers </NavLinks>
                </NavItems>
                <NavItems>
                <NavLinks to='/contact' >Contact-Us </NavLinks>
                </NavItems>
            </NavMenu>
        </NavbarContainer>
    </Nav>  
    </IconContext.Provider>
     </>
  )
}

export default NavBar