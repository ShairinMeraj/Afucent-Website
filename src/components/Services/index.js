import React from 'react'
import Icon1 from '../../images/imp.jpg'
import Icon2 from '../../images/consult.jpg'
import Icon3 from '../../images/managedS.jpg'
import { ServicesContainer, Servicesdiv, ServicesWrapper,ServicesBox, ServicesCard, ServicesH1, ServicesH2,
ServicesP, ServicesIcon } from './ServiceElements';
const Services = () => {
  return (<ServicesBox>
  <ServicesH1>Digital Expereince Management Practice</ServicesH1>
    <ServicesContainer >
   
         <ServicesWrapper>
          
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <Servicesdiv>
                <ServicesH2>Content Management Systems</ServicesH2>
                <ServicesP>Headless CMS</ServicesP>
                <ServicesP> Traditional CMS</ServicesP>
                <ServicesP>Experience Manager  as a Cloud Service</ServicesP>
                </Servicesdiv>
                 </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <Servicesdiv>
                <ServicesH2>Web & Mobile Apps</ServicesH2>
                <ServicesP>Web Applications</ServicesP>
                <ServicesP>Cross Platform Apps</ServicesP>
                </Servicesdiv>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <Servicesdiv>
                <ServicesH2>E-commerce System</ServicesH2>
                <ServicesP>Business-to-business (B2B) sites</ServicesP>
                <ServicesP>Business-to-consumer (B2C) sites</ServicesP>
                </Servicesdiv>
            </ServicesCard>
         </ServicesWrapper>
 
    </ServicesContainer></ServicesBox>
  )
}

export default Services