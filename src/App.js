// src/App.js

import React from 'react';
import './App.css'; 
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes components from react-router-dom

import Apod from './components/Apod'; // Import component for Astronomy Picture of the Day
import MarsRover from './pages/MarsRover'; // Import component for Mars Rover page
import SolInformation from './pages/Sol'; // Import component for Sol information page
import Home from './pages/Home'; // Import component for Home page
import Star from './canvas/Star'; // Import Star component for canvas animation
import NearEarth from './pages/Near-Earth'; // Import component for Near-Earth Objects Data page
import ObjectDetails from './pages/Object-Details'; // Import component for Object Details page

function App() {
  return (
    <div className="App"> {/* Main container for the entire application */}
      <Star/> {/* Include Star component for canvas animation */}
      <Routes> {/* Define routes for different pages */}
        <Route path="/" element={<Home />} /> {/* Route for Home page */}
        <Route path="/AstronomyPictureofTheDay" element={<Apod />} /> {/* Route for Astronomy Picture of the Day page */}
        <Route path="/MarsRoverPhoto" element={<MarsRover />} /> {/* Route for Mars Rover Photo page */}
        <Route path="/Near-Earth-Objects-Data" element={<NearEarth/>}/> {/* Route for Near-Earth Objects Data page */}
        <Route path="/Solinformation" element={<SolInformation />} /> {/* Route for Sol information page */}
        <Route path="object/:id" element={<ObjectDetails/>}/> {/* Route for Object Details page */}
      </Routes>
    </div>
  );
}

export default App;
