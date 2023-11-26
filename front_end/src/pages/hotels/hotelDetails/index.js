import { useLocation } from "react-router-dom";

const HotelDetailPage = (props) => {
    const location = useLocation();
    const formData = location.state;
    
    return (
      <div className="details">
        <h2>Car Details</h2>
        <p>Departure Place: {formData.departurePlace}</p>
        <p>Departure Time: {formData.departureTime}</p>
        <p>Arrival Time: {formData.arrivalTime}</p>
        <p>adults: {formData.adults}</p>
        <p>children: {formData.children}</p>
        <p>Price: ${formData.price}</p>
        {/* Add more details as needed */}
      </div>
    );
  };

export default HotelDetailPage;