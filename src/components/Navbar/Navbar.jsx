import React from "react";
import "./Navbar.css";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-left">
          <div className="logo"></div>
          <ul className="menu">
            <li className="active">Home</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
