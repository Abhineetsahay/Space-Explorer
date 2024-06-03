import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HomeCompo from "../components/HomeCompo"; 
import galaxy from '../images/galaxy-night-landscape.jpg'; 
import marsRover from "../images/image-from-rawpixel-jpeg.jpg"; 
import Footer from "../components/Footer"; 
import Asteriod from "../images/Asteriod.avif"; 


const Home = () => {
  // Using hooks to manage scroll and spring animation
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Initial sections for the HomeCompo
  const initialSections = [
    {
      id: 1,
      title: "Welcome to Space Explorer",
      description:  
        "Our website provides the daily Astronomy Picture of the Day, Mars Rover Photos based on Sol (Martian day), and the latest Mars Weather updates.",
      link: {
        text: "Know more about Sol",
        url: "/Solinformation",
      },
      image: galaxy, // Image for the first section
    },
    {
      id: 2,
      title: "Astronomy Picture of the Day (APOD)",
      description:
        "Discover a new image or photograph of our fascinating universe every day with NASA's APOD. Each image comes with a brief explanation written by a professional astronomer.",
      image: null, // Placeholder for APOD image
    },
    {
      id: 3,
      title: "Mars Rover Photos",
      description:
        "Explore stunning images taken by NASA's Mars rovers, including Curiosity, Spirit, and Opportunity. See the latest photos and get a glimpse of the Martian surface.",
      image: marsRover, // Image for the Mars Rover Photos section
    },
    {
      id: 4,
      title: "Near Earth Objects",
      description:
        "Stay updated with the latest information on Near Earth Objects (NEOs), including their sizes, potential hazards, and close-approach data, directly from NASA.",
      image: Asteriod, // Image for the Near Earth Objects section
    },
    {
      id: 5,
      title: "Why Explore Space?",
      description:
        "Space exploration ignites our imagination, fuels our curiosity, and brings us closer to understanding the universe and our place in it. Discover how space exploration benefits our own planet.",
    },
  ];

  // State to manage sections
  const [sections, setSections] = useState(initialSections);

  return (
    <>
      {/* Progress bar */}
      <motion.div style={{ scaleX: smoothScroll }} className="progress-bar" />
      {/* Home page */}
      <div className="Home-page">
        {/* Rendering HomeCompo component with sections */}
        <HomeCompo sections={sections} setSections={setSections} />
      </div>
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Home;
