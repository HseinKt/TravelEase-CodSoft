import { useLocation, useNavigate } from "react-router-dom";

const HotelDetailsPage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state;
    
    return (
      <div className="details">
        <h2>Hotel Details</h2>
        <p>Departure Place: {formData.departurePlace}</p>
        <p>Departure Time: {formData.departureTime}</p>
        <p>Arrival Time: {formData.arrivalTime}</p>
        <p>adults: {formData.adults}</p>
        <p>children: {formData.children}</p>
        <p>Price: ${formData.price}</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  };

export default HotelDetailsPage;