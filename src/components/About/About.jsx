import React, { useRef, useState } from "react";
import "./About.css";
import images from "../../constants/images";
import { about_stats } from "../../constants/data";

import video from "../../assets/videos/video.mp4";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const About = () => {
  const vidRef = useRef(null);
  const [toggleVideo, setToggleVideo] = useState(true);

  const playVideo = () => {
    setToggleVideo(!toggleVideo);
    if (toggleVideo) vidRef.current.play();
    else vidRef.current.pause();
  };

  return (
    <div className="about section-p">
      <div className="container">
        <div className="about-content">
          <div className="about-grid grid">
            <img src={images.About_Alex} alt="" className="about-img" />
            <div className="section-title">
              <h3 className="text-brown">
                I'm <span className="text-dark">Tom</span>
              </h3>
              <p className="text">
                I am a passionate developer skilled in Java Spring and React. I
                enjoy creating seamless web applications that enhance user
                experience.
              </p>
            </div>
          </div>

          <div className="about-grid grid">
            {about_stats.map((e, index) => {
              return (
                <div className="about-item text-center flex" key={index}>
                  <div className="about-item-icon">
                    <img src={e.image} alt="" />
                  </div>
                  <div className="about-item-text text-left">
                    <h3 className=" fs24 ls-2">{e.value}</h3>
                    <p className="text">{e.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="about-grid grid">
            <div className="section-title">
              <h3 className="text-brown">
                video <span className="text-dark">Presentation</span>
              </h3>
              <p className="text mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                aliquam quos ducimus natus, illum ex consequuntur expedita harum
                culpa deserunt doloribus consectetur accusamus, nam ipsum cum
                aperiam dolorem, tempore at?
              </p>
            </div>
            <div className="about-video">
              <video src={video} autoPlay loop ref={vidRef}></video>
              <button type="button" className="vidPlayBtn" onClick={playVideo}>
                {toggleVideo ? (
                  <FaPlay size={28} className="text-brown" />
                ) : (
                  <FaPause size={28} className="text-brown" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
