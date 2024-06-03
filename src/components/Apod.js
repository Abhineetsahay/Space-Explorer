import React, { useState } from "react";
import "./Apod.css"; 
import useApod from "../hooks/useApod"; // Import custom hook for fetching APOD data
import { FaShareAlt } from "react-icons/fa"; // Import share icon from react-icons/fa
import { BiLike, BiSolidLike } from "react-icons/bi"; // Import like icons from react-icons/bi
import toast from "react-hot-toast"; // Import toast notification library
import Navbar from "./Navbar"; // Import Navbar component
import { Link } from "react-router-dom"; // Import Link component for navigation
import Loader from "../loader/Loader"; // Import Loader component for loading state
import Error from "../loader/Error"; // Import Error component for error state

const Apod = () => {
  const [like, setLike] = useState(false); // State to track like status
  const [date, setDate] = useState(""); // State to track the selected date

  // Custom hook to fetch APOD data based on the selected date
  const { data, loading, error } = useApod(date);

  // Show loader while fetching data
  if (loading) {
    return <Loader />;
  }

  // Show error message if there is an error fetching data
  if (error) {
    return <Error errorhandler={error.message} />;
  }

  // Handle like button click
  const clickHandler = () => {
    setLike((prevLike) => {
      if (prevLike) {
        toast.success("Successfully unliked");
      } else {
        toast.success("Successfully liked");
      }
      return !prevLike;
    });
  };

  // Handle share button click
  const shareHandler = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => toast.success("LINK COPIED"))
      .catch(() => toast.error("LINK NOT COPIED"));
  };

  return (
    <>
      <Navbar /> {/* Render Navbar component */}
      <div className="apod"> {/* Main container for APOD component */}
        <div className="get-date"> {/* Container for date selection */}
          <label htmlFor="apod-date" className="label">
            Enter the Date you want to see Apod
            <input
              type="date"
              id="apod-date"
              value={date}
              onChange={(e) => setDate(e.target.value)} // Update date state on change
            />
          </label>
        </div>
        <div className="apod-items"> {/* Container for APOD items */}
          <div className="apod-compo"> {/* Container for APOD components */}
            <div className="image-div"> {/* Container for APOD image */}
              <Link to={data.url} target="_blank"> {/* Link to full-size image */}
                <img
                  src={data.url}
                  className="image"
                  alt="space"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="details"> {/* Container for APOD details */}
              <div className="title-date"> {/* Container for title and date */}
                <h1 className="title">{data.title}</h1> {/* Title of APOD */}
                <div className="date">{data.date}</div> {/* Date of APOD */}
              </div>
              <div className="like-share"> {/* Container for like and share buttons */}
                <button
                  className="like-button"
                  onClick={clickHandler}
                  title="like"
                >
                  {like ? (
                    <BiSolidLike className="like" />
                  ) : (
                    <BiLike className="like" />
                  )}
                </button>
                <button
                  className="share-button"
                  title="Share button"
                  onClick={shareHandler}
                >
                  <FaShareAlt className="share" />
                </button>
              </div>
              <div className="explanation">{data.explanation}</div> {/* Explanation of APOD */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apod;
