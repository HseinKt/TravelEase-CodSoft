import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../header";

const OneWayDetailsPage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state;
    
    return (
      <div className="details">
        <Header />
        <h2>one-way Flight Details</h2>
        <p>Departure Place: {formData.departurePlace}</p>
        <p>Arrival Place: {formData.arrivalPlace}</p>
        <p>Departure Time: {formData.departureTime}</p>
        <p>adults: {formData.adults}</p>
        <p>children: {formData.children}</p>
        <p>Price: ${formData.price}</p>
        <button onClick={() => navigate(-1)} className='btn'>Back</button>
      </div>
    );
  };

export default OneWayDetailsPage;