import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
            <div className="footer-info">
            <h1>My Name</h1>
            <p>Based un my City</p>
        </div>
        <div className="footer-contact">
            <h3>Contact me</h3>
            <p>And lets go to work</p>
        </div>
        <div className="footer-sns">
            <div className="design-by">
                Design By Sol de Astrea
            </div>
            <div className="sns-links">
                <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer'>
                    <i className='fab fa-linkedin linkedin' />
                </a>
                <a href="https://twitter.com/" target="_blank" rel='noreferrer'>
                    <i className='fab fa-twitter twitter' />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'>
                    <i className='fab fa-facebook facebook' />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer