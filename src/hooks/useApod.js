import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * Custom hook to fetch Astronomy Picture of the Day (APOD) data from NASA API.
 * @param {string} date - The date for which to fetch APOD data.
 * @returns {object} - Contains APOD data, loading state, and error state.
 */
const useApod = (date) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      const API_KEY = process.env.REACT_APP_NASA_API_KEY; // Retrieve API key from environment variables
      try {
        let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
        if (date) {
          url += `&date=${date}`; // Append date to URL if provided
        }
        const response = await axios.get(url);
        setData(response.data); // Set the fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err); // Set error if fetching fails
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchApod(); // Call the fetch function
  }, [date]); // Re-run the effect when the date changes

  return { data, loading, error }; // Return the data, loading, and error states
};

export default useApod;
