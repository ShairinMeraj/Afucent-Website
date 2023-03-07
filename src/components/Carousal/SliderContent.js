import React from "react";

function SliderContent({ activeIndex, sliderImage,MsliderImage }) {
  return (<>
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <picture>
   
          <source  className="(slide-image)"  srcset={slide.urls} media="(min-width: 990px)"  alt="" />
  
    <img className="slide-image"  src={slide.url} alt="" />
</picture>
          {/* <img className="slide-image" src={slide.urls} alt="" />
          <img className="mobile-only" src={slide.urls} alt="" /> */}
          <h2 className="slide-title"> {slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </section>
    </> 
  );
}

export default SliderContent;