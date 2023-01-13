import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper,
ArrowForward,ArrowRight} from './HeroElements'
const HeroSection = () => {
    const [hover, setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Crafting Differentiated Digital Experience With MarTech</HeroH1>
            <HeroP>We have a team of experts with rich experience in Digital Experience & Marketing Technologies.</HeroP>
            <HeroBtnWrapper>
                <Button to='services' onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>Learn More{hover?<ArrowForward/>:<ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection