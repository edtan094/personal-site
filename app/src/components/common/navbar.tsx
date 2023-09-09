import React from "react";
import Hamburger from "../../icons/hambuger";

export default function Navbar() {
  return (
    <div className="navbar navbar-sticky">
      <div className="navbar-start">
        <div className="dropdown">
          <label className="btn my-2" tabIndex="0">
            <Hamburger />
          </label>

          <div className="dropdown-menu dropdown-menu-bottom-right">
            <a href="/about" className="dropdown-item text-sm">
              About Me
            </a>
            <a href="projects" tabIndex="-1" className="dropdown-item text-sm">
              Projects
            </a>
            <a href="contact" tabIndex="-1" className="dropdown-item text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <a className="navbar-item">Edwins Website</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
