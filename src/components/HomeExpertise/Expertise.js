import React, {Fragment, useState} from 'react'
import { Button } from "../ButtonElements";
import ExpertiseDetails  from './ExpertiseDetails'
import "./Expertise.css"
const Expertise = () => {
    const[detail]=useState(ExpertiseDetails )
  return (
    <Fragment>
        <section className='sh'>
            <div className='sh-heading'>
            <span>
            Our Expertise
            </span>
            <h2>Leveraging Technology for Scaled Digital Experience</h2>
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


export default Expertise