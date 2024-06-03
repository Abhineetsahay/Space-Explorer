import toast from 'react-hot-toast';
import './Error.css'; 

const Error = ({ errorhandler }) => {
  toast.error(errorhandler); // Display an error toast notification with the error message

  return (
    <div className='error'>{errorhandler}</div> // Render the error message inside a div
  );
};

export default Error;
