import React from 'react'
import Icon1 from '../../images/img1.svg'
import Icon2 from '../../images/img1.svg'
import Icon3 from '../../images/img1.svg'
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesH1, ServicesH2,
ServicesP, ServicesIcon } from './ServiceElements';
const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
         <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Implementation</ServicesH2>
                <ServicesP>sfj drtjr dfrkj jhg gfgtjhgwergju tjeht5gk.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Consulting</ServicesH2>
                <ServicesP>sfj drtjr dfrkj jhg gfgtjhgwergju tjeht5gk.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Managed Services</ServicesH2>
                <ServicesP>sfj drtjr dfrkj jhg gfgtjhgwergju tjeht5gk.</ServicesP>
            </ServicesCard>
         </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services