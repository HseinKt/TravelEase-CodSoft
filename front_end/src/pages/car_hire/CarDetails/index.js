// CarDetails.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CarDetailsPage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state;
  
  return (
    <div className="details">
      <h2>Car Details</h2>
      <p>Departure Place: {formData.departurePlace}</p>
      <p>Departure Time: {formData.departureTime}</p>
      <p>Arrival Time: {formData.arrivalTime}</p>
      <p>Pick Up Time: {formData.pick_up_time}</p>
      <p>Drop Off Time: {formData.drop_off_time}</p>
      <p>Price: ${formData.price}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default CarDetailsPage;
