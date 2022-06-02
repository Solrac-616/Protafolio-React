import React from 'react'
import "./Cover.css";
import bannerVideo from "../../media/bannerVideo.mp4";

const Cover = () => {
  return (
    <div className='cover-container' >
      <video src={bannerVideo} className='video' autoPlay loop muted />
      <h1>Sol de Astrea Dev.</h1>
      <p>Developer | React | HTML | CSS</p>
    </div>
  )
}

export default Cover