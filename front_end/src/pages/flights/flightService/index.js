// flightService.js
const BASE_URL = 'https://api.flightapi.io';

export const fetchFlightData = async (token) => {
  const apiUrl = `${BASE_URL}/verify/${token}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Check the content type
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data;
    } else {
      console.error('Unexpected content type:', contentType);
      const text = await response.text();
      console.log('Response text:', text);
      return null; // or handle the non-JSON response accordingly
    }
  } catch (error) {
    console.error('Error fetching flight data:', error);
  }
};
