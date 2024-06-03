import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ObjectDetails.css"; // Import the CSS file
import Loader from "../loader/Loader";
import Error from "../loader/Error";
import Navbar from "../components/Navbar";

// Component to display details of a specific object
const ObjectDetails = () => {
  // Get the id parameter from the URL
  const { id } = useParams();
  // State variables to store object data, loading state, and error state
  const [objectData, setObjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch object data from NASA API
  useEffect(() => {
    const fetchObjectData = async () => {
      const API_KEY = process.env.REACT_APP_NASA_API_KEY;
      try {
        // Fetch object data using the provided id and API key
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`);
        // Set the object data and update loading state
        setObjectData(response.data);
        setLoading(false);
      } catch (e) {
        // Set the error and update loading state
        setError(e);
        setLoading(false);
      }
    };
    // Call the fetchObjectData function
    fetchObjectData();
  }, [id]); // Trigger the effect whenever the id changes

  // Render a loader while loading
  if (loading) {
    return <Loader/>
  }

  // Render an error message if an error occurs
  if (error) {
    return <Error errorhandler={error.message}/>;
  }

  // Render the object details once loaded
  return (
    <>
      <Navbar/>
      {/* Container for object details */}
      <div className="object-details">
        <div className="object-details-container">
          {/* Display object details */}
          <h1>{objectData.name}</h1>
          <p><strong>ID:</strong> {objectData.id}</p>
          <p><strong>Reference ID:</strong> {objectData.neo_reference_id}</p>
          <p><strong>Designation:</strong> {objectData.designation}</p>
          <p><strong>Absolute Magnitude:</strong> {objectData.absolute_magnitude_h}</p>
          <p><strong>Diameter (km):</strong> {objectData.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} - {objectData.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}</p>
          <p><strong>Potentially Hazardous:</strong> {objectData.is_potentially_hazardous_asteroid ? "Yes" : "No"}</p>
          {/* Link to JPL Small-Body Database */}
          <a href={objectData.nasa_jpl_url} target="_blank" rel="noopener noreferrer">JPL Small-Body Database</a>
        </div>
      </div>
    </>
  );
};

export default ObjectDetails;
