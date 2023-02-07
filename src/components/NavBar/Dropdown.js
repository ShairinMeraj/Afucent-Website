import React from 'react';
import "./Dropdown.css"



function Dropdown() {
  return (<>

          <div for="showMega" class="mega-box mobile-item ">
            <div class="content">
               <div class="row">
                <img src="img.jpg" alt=""/>
              </div>
              <div class="row">
                <header>Design Services</header>
                <ul class="mega-links">
                  <li><a href="/home">Graphics</a></li>
                  <li><a href="/home">Vectors</a></li>
                  <li><a href="/home">Business cards</a></li>
                  <li><a href="/home">Custom logo</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Email Services</header>
                <ul class="mega-links">
                  <li><a href="/home">Personal Email</a></li>
                  <li><a href="/home">Business Email</a></li>
                  <li><a href="/home">Mobile Email</a></li>
                  <li><a href="/home">Web Marketing</a></li>
                </ul>
              </div>
              <div class="row">
                <header>Security services</header>
                <ul class="mega-links">
                  <li><a href="/home">Site Seal</a></li>
                  <li><a href="/home">VPS Hosting</a></li>
                  <li><a href="/home">Privacy Seal</a></li>
                  <li><a href="/home">Website design</a></li>
                </ul>
              </div>
            </div>
          </div>
 
        </>
  );
}

export default Dropdown;
