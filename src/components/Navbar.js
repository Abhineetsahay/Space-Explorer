import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

/**
 * Navbar component - Displays navigation links
 * Uses React Router's Link and useLocation for routing and highlighting the active link
 */
function Navbar() {
  const location = useLocation(); // Get the current location

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-items">
          <Link
            to="/AstronomyPictureofTheDay"
            className={`link ${location.pathname === "/AstronomyPictureofTheDay" ? "active" : ""}`}
            title="Astronomy Picture of the Day"
          >
            <p className="home">APOD</p> {/* Display APOD link */}
          </Link>
          <Link
            to="/MarsRoverPhoto"
            className={`link ${location.pathname === "/MarsRoverPhoto" ? "active" : ""}`}
          >
            <p className="home">MARS ROVER PHOTO</p> {/* Display Mars Rover Photo link */}
          </Link>
          <Link
            to="/Near-Earth-Objects-Data"
            className={`link ${location.pathname === "/Near-Earth-Objects-Data" ? "active" : ""}`}
          >
            <p className="home">Near-Earth Objects Data</p> {/* Display Near-Earth Objects Data link */}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
