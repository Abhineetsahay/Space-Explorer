import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Custom hook to fetch Near-Earth Objects (NEO) data from NASA API.
 * @param {string} startdate - The start date for fetching NEO data.
 * @param {string} enddate - The end date for fetching NEO data.
 * @returns {object} - Contains NEO data, loading state, and error state.
 */
const useNear = (startdate, enddate) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNearData = async () => {
      const API_KEY = process.env.REACT_APP_NASA_API_KEY; // Retrieve API key from environment variables
      try {
        let url = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}`;
        if (startdate && enddate) {
          url += `&start_date=${startdate}`; // Append start date to URL if provided
          url += `&end_date=${enddate}`; // Append end date to URL if provided
        }
        const response = await axios.get(url);
        const result = response.data;
        setData(result); // Set the fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (e) {
        console.log(e);
        setError(e); // Set error if fetching fails
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchNearData();
  }, [startdate, enddate]); // Re-run the effect when startdate or enddate changes

  return { data, loading, error }; // Return the data, loading, and error states
};

export default useNear;
