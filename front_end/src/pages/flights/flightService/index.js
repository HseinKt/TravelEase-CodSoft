// flightService.js
const BASE_URL = 'https://api.flightapi.io';

export const fetchFlightData = (token) => {
  const apiUrl = `${BASE_URL}/verify/${token}`;

  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching flight data:', error);
    });
};
