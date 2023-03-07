
import React, {Fragment, useState} from 'react'

import { LinkButton } from '../LinkButton';

import ServiceDetails  from './ServiceDetails' 
import "./Services.css"
const ServicesHome = () => {
    const[detail]=useState(ServiceDetails )
  return (
    <Fragment>
        <section className='sh'>
            <div className='sh-heading'>
            <span>
            Our Services
            </span>
            <h2>Leveraging Technology for Scaled Digital Experience</h2>
            </div>
            <div className='s-row'>
                {
                    detail.map((detail )=>{
                        return ( <div className='s-col'>
                            <div className='s-card '>
                                <div className='thumb'>
                                    <img src={detail.Image} alt="img"/>
                                                                                             
                                </div>
                                <div className='s-info'><h3>
                                    {detail.name}</h3>
                                    <p>
                                        {detail.info}</p>
                                      <div className='s-b'>   <LinkButton to='/service'>Learn more</LinkButton></div></div>
                            </div>
                           </div>
                            
                    
                    
                     ) }) }
        
</div>
    
        </section>
    </Fragment>
  )}


export default ServicesHome