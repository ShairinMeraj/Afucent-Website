import React from 'react'

const Footer = () => {
  return (
    <FooterContainer>
     <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems> 
                    <FooterLinkTitle> About Us </FooterLinkTitle>
                        <FooterLink to="/LearnMore">About Us</FooterLink>
                        <FooterLink to="/LearnMore">About Us</FooterLink>
                        <FooterLink to="/LearnMore">About Us</FooterLink>
                        <FooterLink to="/LearnMore">About Us</FooterLink>
                        <FooterLink to="/LearnMore">About Us</FooterLink>
                   
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>

     </FooterWrap>
    </FooterContainer>
  )
}

export default Footer