
import React, {Fragment, useState} from 'react'
import { Button } from "../ButtonElements";
import ServiceDetails  from './ServiceDetails'
import "./Services.css"
const ServicesHome = () => {
    const[detail]=useState(ServiceDetails )
  return (
    <Fragment>
        <section className='sh'>
            <div className='sh-heading'>
            <span>
            Services
            </span>
            <h2>Our Services</h2>
            </div>
            <div className='s-row'>
                {
                    detail.map((detail )=>{
                        return ( <div className='s-col'>
                            <div className='s-card '>
                                <div className='thumb'>
                                    <img src={detail.Image} alt="agent"/>
                                                                                             
                                </div>
                                <div className='s-info'><h3>
                                    {detail.name}</h3>
                                    <p>
                                        {detail.info}</p>
                                      <div className='s-b'>  <Button >Learn more</Button></div></div>
                            </div>
                           </div>
                            
                    
                    
                     ) }) }
        
</div>
    
        </section>
    </Fragment>
  )}


export default ServicesHome