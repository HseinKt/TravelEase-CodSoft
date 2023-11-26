import { useLocation } from "react-router-dom";

const MulticityDetailsPage = (props) => {
    const location = useLocation();
    const formData = location.state;
    
    return (
      <div className="details">
        <h2>Multi-city Flight Details</h2>
        <h3>** First FLight **</h3>
        <p>Departure Place: {formData.departurePlace}</p>
        <p>Arrival Place: {formData.arrivalPlace}</p>
        <p>Departure Time: {formData.departureTime}</p>

        <h3>** Second FLight **</h3>
        <p>Departure Place: {formData.departurePlace2}</p>
        <p>Arrival Place: {formData.arrivalPlace2}</p>
        <p>Departure Time: {formData.departureTime2}</p>
        
        <p>adults: {formData.adults}</p>
        <p>children: {formData.children}</p>
        <p>Price: ${formData.price}</p>
        <button>back</button>
      </div>
    );
  };

export default MulticityDetailsPage;
