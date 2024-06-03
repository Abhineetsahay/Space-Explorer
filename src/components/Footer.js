import "./Footer.css"; // Import the CSS file for styling
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="links-footer">
        {/* Link to the Astronomy Picture of the Day page */}
        <Link to="/AstronomyPictureofTheDay" className="link-home-element">
          Visit Our Website
        </Link>
      </div>
    </div>
  );
};

export default Footer; // Export the Footer component
