import React from 'react';
import "./Slider.css";

const slidesInfo= [
    {
        src: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png",
        alt: "Project 1",
        desc: "Project 1"
    },
    {
        src: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg",
        alt: "Project 2",
        desc: "Project 2"
    },
    {
        src: "https://cdn.pixabay.com/photo/2019/07/12/18/48/code-4333398_960_720.jpg",
        alt: "Project 3",
        desc: "Project 3"
    },
];

const slides = slidesInfo.map((slide) => (
    
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;