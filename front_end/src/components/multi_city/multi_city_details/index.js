import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../header";

const MulticityDetailsPage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state;
    
    return (
      <div className="details">
        <Header />
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
        <button onClick={() => navigate(-1)} className='btn'>Back</button>
      </div>
    );
  };

export default MulticityDetailsPage;
