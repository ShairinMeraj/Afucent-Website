import React, {useState} from 'react'

import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
ArrowForward,ArrowRight} from '../HeroSection/HeroElements'
const Connect = () => {
    const [hover, setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg alt='team' src={require("../../images/contact.jpg")} />
        </HeroBg>
        <HeroContent>
            
            <HeroH1>Let's help you navigate your next</HeroH1>
        
            <HeroBtnWrapper>
                <Button to='services' onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>Contact Us{hover?<ArrowForward/>:<ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Connect