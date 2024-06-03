import React, { useEffect } from "react";
import "./HomeCompo.css"; // Import the CSS file for styling
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import { motion } from "framer-motion"; // Import motion for animations
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS styles
import useApod from "../hooks/useApod"; // Import the custom hook for APOD data

const HomeCompo = ({ sections, setSections }) => {
  const { data: apodData } = useApod(); // Fetch APOD data using the custom hook

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms

    if (apodData.url) { // Check if APOD data's URL is available
      setSections(prevSections => {
        const newSections = [...prevSections];
        newSections[1].image = apodData.url; // Update the image URL in the second section
        return newSections;
      });
    }
  }, [apodData, setSections]);

  return (
    <div className="Home-page-details">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="home-details"
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 1 }} // Final animation state
          transition={{ duration: 1 }} // Animation duration
          data-aos="fade-right" // Add AOS animation
        >
          <div className="heading-details">
            <h2 className="Heading">{section.title}</h2>
            <p className="details-Home">{section.description}</p>
            {section.link && (
              <Link to={section.link.url} className="sol-about">
                {section.link.text}
              </Link>
            )}
          </div>
          {section.image && (
            <Link to={section.image} target="_blank" rel="noopener noreferrer">
              <img
                src={section.image}
                alt={section.title}
                className={`Home-page-details-image ${section.id === 3 ? 'New-class' : ''}`} // Conditional class based on section ID
                loading="lazy" // Lazy loading for images
              />
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default HomeCompo; // Export the HomeCompo component
