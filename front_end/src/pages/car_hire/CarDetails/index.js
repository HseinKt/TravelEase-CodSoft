// CarDetails.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const CarDetailsPage = (props) => {
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
      {/* Add more details as needed */}
    </div>
  );
};

export default CarDetailsPage;
