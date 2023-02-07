
import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'
const Sidebar  = ({isOpen, toggle}) => {
  return (
   <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
        <CloseIcon/>
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
            <SidebarLink to='/LearnMore' onClick={toggle}>About</SidebarLink>
            <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
            <SidebarLink to='contact' onClick={toggle}>Contact-Us</SidebarLink>
        </SidebarMenu>
    </SidebarWrapper>
   </SidebarContainer>
  )
}

export default Sidebar 