import React from "react";
import Hamburger from "../../icons/hambuger";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar navbar-floating">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <label className="btn my-2" tabIndex={0}>
            <Hamburger />
          </label>

          <div className="dropdown-menu dropdown-menu-bottom-right">
            <Link
              href="projects"
              tabIndex={-1}
              className="dropdown-item text-sm underline-link"
            >
              Projects
            </Link>
            <Link
              href="contact"
              tabIndex={-1}
              className="dropdown-item text-sm underline-link"
            >
              Contact
            </Link>
          </div>
        </div> */}
      </div>
      <div className="navbar-center">
        <Link
          href="/"
          className="dropdown-item text-sm underline-link text-center"
        >
          Home
        </Link>
        <Link
          href="projects"
          className="dropdown-item text-sm underline-link text-center"
        >
          Projects
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
