import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <div className="navbar navbar-floating navbar-glass mt-0">
      <div className="navbar-start">
        <ThemeSwitcher />
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
