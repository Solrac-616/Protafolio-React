import React from 'react';
import Carousel, { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides.js";
import "./Slider.css";


const Slider = () => {
  return (
    <div className="carousel-container">
        <div className="carousel-title">
            <h2>My Projects</h2>
        </div>
        <Carousel 
            plugins={[
                'infinite',
                'arrows',
                'centered',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                   numberOfSlides: 3
                  }
                },
                {
                    resolve: autoplayPlugin,
                    options: {
                      interval: 2000,
                    }
                },
              ]}
            animationSpeed={1000}
            offset={50}
            itemWidth={400}
            slides={Slides}
        />
    </div>
  )
}

export default Slider;