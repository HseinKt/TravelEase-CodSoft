import { useLocation } from "react-router-dom";

const OneWayDetailsPage = (props) => {
    const location = useLocation();
    const formData = location.state;
    
    return (
      <div className="details">
        <h2>one-way Flight Details</h2>
        <p>Departure Place: {formData.departurePlace}</p>
        <p>Arrival Place: {formData.arrivalPlace}</p>
        <p>Departure Time: {formData.departureTime}</p>
        <p>adults: {formData.adults}</p>
        <p>children: {formData.children}</p>
        <p>Price: ${formData.price}</p>
      </div>
    );
  };

export default OneWayDetailsPage;