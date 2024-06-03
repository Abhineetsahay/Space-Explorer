import axios from "axios";
import { useEffect, useState } from "react";
import "./MarsRover.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const MarsRover = () => {
  const [photos, setPhotos] = useState([]);
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  const fetchRoverPhoto = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`
      );
      const result = response.data;
      const newPhotos = result.photos.slice(0, 10); // Fetch 10 new photos
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]); // Concatenate with existing photos
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRoverPhoto();
  },[]);

  const fetchMorePicture = () => {
    fetchRoverPhoto();
  };

  return (
    <>
      <Navbar />
      <div className="Mars-Rover-Page">
        <div className="Mars-Rover-photo">
          <div className="Mars-photo-gallary">
            <h1 className="title-mars-picture">
              Mars Rover Photos for Sol 322
            </h1>
            {photos.length > 0 ? (
              <div className="Mars-Photos">
                {photos.map((photo) => (
                  <div key={photo.id} className="Mars-Photo">
                    <Link to={photo.img_src} target="_blank">
                      <img
                        src={photo.img_src}
                        alt={`Mars Rover - ${photo.id}`}
                        className="mars-image"
                      />
                    </Link>
                    <div>
                      <p>{photo.camera.full_name}</p>
                      <p>{photo.earth_date}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No photos available.</p>
            )}
            <div>
              <button onClick={fetchMorePicture} className="button">
                Next Picture
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarsRover;
