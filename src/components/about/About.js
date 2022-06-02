import React from 'react';
import "./About.css"

const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
            <h3>Dejame contarte sobre Mi</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam ratione doloremque, eius vitae eaque odit maxime eligendi totam asperiores deleniti quam iusto veritatis saepe optio quasi dignissimos placeat mollitia.</p>
        </div>
        <div className="about-img">
            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_960_720.jpg" alt="About" />
        </div>
    </div>
  )
}

export default About