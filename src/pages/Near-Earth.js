import React, { useState, useEffect } from "react";
import "./Near-Earth.css"; // Import the CSS file
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import useNear from "../hooks/useNear";
import Loader from "../loader/Loader";
import Error from "../loader/Error";

const NearEarth = () => {
  const [startingdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [fetchDates, setFetchDates] = useState({ start: '', end: '' });
  const { data, loading, error } = useNear(fetchDates.start, fetchDates.end); // Use the custom hook

  useEffect(() => {
    setFetchDates({ start: startingdate, end: enddate });
  }, [startingdate, enddate]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error errorhandler={error.message} />;
  }

  const nearEarthObjects = data?.near_earth_objects || {};

  return (
    <>
      <Navbar />
      <div className="container flex-container">
        <h1 className="title-neo">Near-Earth Objects Data</h1>
        <div className='get-date-neo'>
          <label htmlFor="starting" className="label">
            Starting Date you want to see Near-Earth Objects
            <input
              type='date'
              id="starting"
              value={startingdate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label htmlFor="ending" className="label">
            End Date you want to see Near-Earth Objects
            <input
              type='date'
              id="ending"
              value={enddate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
        <div className="neo-grid">
          {Object.keys(nearEarthObjects).map((date) => (
            nearEarthObjects[date].map((neo, index) => (
              <div className="neo-box" key={index}>
                <h2 className="neo-name">{neo.name}</h2>
                <p className="neo-info">
                  <strong>ID:</strong> {neo.id}
                </p>
                <p className="neo-info">
                  <strong>Reference ID:</strong> {neo.neo_reference_id}
                </p>
                <p className="neo-info">
                  <strong>Diameter:</strong>{" "}
                  {neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)}{" "}
                  -{" "}
                  {neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}{" "}
                  km
                </p>
                <p className="neo-info">
                  <strong>Potentially Hazardous:</strong>{" "}
                  {neo.is_potentially_hazardous_asteroid ? "Yes" : "No"}
                </p>
                <p>
                  <Link
                    className="neo-link"
                    to={`/object/${neo.id}`}
                  >
                    More Info
                  </Link>
                </p>
              </div>
            ))
          ))}
        </div>
      </div>
    </>
  );
};

export default NearEarth;
