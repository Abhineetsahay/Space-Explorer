import React from "react";
import { Link } from "react-router-dom";
import "./Sol.css";

// Data for different sections about Sol
const solData = [
  {
    title: "What is Sol in Mars Exploration?",
    content: "In the context of Mars exploration, 'sol' refers to a Martian day, which is approximately 24 hours, 39 minutes, and 35.244 seconds long. It's derived from the Latin word 'solis,' meaning 'sun,' and is used to track time on the Martian surface."
  },
  {
    title: "How Long is a Sol on Mars?",
    content: "While a Martian day, or sol, is similar in length to an Earth day, the Martian calendar is slightly different due to the planet's longer orbital period around the sun. A Martian year, or the time it takes for Mars to complete one orbit around the sun, is approximately 687 Earth days."
  },
  {
    title: "Why is Sol Important in Mars Exploration?",
    content: "The concept of sol is crucial for scheduling activities and coordinating missions on Mars. It helps scientists and engineers on Earth synchronize communication and operations with robotic explorers on the Martian surface, such as rovers and landers. Understanding sol also aids in planning experiments, analyzing data, and conducting research about Mars' climate, geology, and atmosphere."
  },
  {
    title: "How is Sol Used in Mars Missions?",
    content: "In Mars missions, sol serves as a fundamental unit of time for planning rover activities, conducting scientific observations, and managing power usage. Rovers like Curiosity and Perseverance operate on sol-based schedules, executing commands and tasks according to the Martian day-night cycle. Sol is also used to timestamp photographs, log environmental data, and track mission progress throughout the Martian year."
  },
  {
    title: "Conclusion",
    content: "Sol is a key concept in Mars exploration, providing a standardized measure of time for mission planning and scientific investigations on the Martian surface. By understanding sol and its significance, scientists and engineers can optimize the efficiency and effectiveness of Mars missions, advancing our understanding of the Red Planet and its potential for future human exploration."
  }
];

// Component for displaying Sol information
const SolInformation = () => {
  return (
    <div className="Sol-main">
      <div className="sol-information">
        {solData.map((section, index) => (
          <div key={index}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
        <Link to="/">Back to Main Section</Link>
      </div>
    </div>
  );
};

export default SolInformation;
