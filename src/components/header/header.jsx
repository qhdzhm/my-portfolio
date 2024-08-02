import React from "react";
import "./header.css";
import NaviBar from "../NaviBar/NaviBar";
import { Link } from "react-scroll";

const header = () => {
  return (
    <div className="header flex flex-col" id="header">
      {/* navibar */}
      <NaviBar></NaviBar>
      <div className="container flex">
        <div className="header-content">
          <h2 className="text-uppercase text-white op-07 fw-6 ls-2">
            web design,branding,graphic{" "}
          </h2>
          <h1 className="text-white fw-6 header-title">
            Hello, I am <span className="text-brown">Web designer </span>Living
            in Sydney,Australia
          </h1>
          <div className="btn-groups flex">
            <Link to="works" smooth={true}>
              <button type="button" className="btn-item bg-brown fw-4 ls-2">
                See Works
              </button>
            </Link>
            <Link to="contact" smooth={true}>
            <button type="button" className="btn-item bg-dark fw-4 ls-2">
              Contact Me!
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
