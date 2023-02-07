import React, {useState} from 'react'

import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
ArrowForward,ArrowRight} from '../HeroSection/HeroElements'
const K = () => {
    const [hover, setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg alt='team' src={require("../../images/pexels-fauxels-3183183.jpg")} />
        </HeroBg>
        <HeroContent>
            
            <HeroH1>Helping organizations to enhance their digital experience</HeroH1>
            <HeroP>Afucent is a technology driven company with major focus in digital experience and marketing technologies.

Our focus is to help organizations to reshape
their business structure by leveraging advanced tools and making better use of scalable solutions.

We have a strong team with different levels of expertise helping clients and providing solutions with a good mix of business and technology.</HeroP>
            <HeroBtnWrapper>
                <Button to='services' onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>Learn More{hover?<ArrowForward/>:<ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default K