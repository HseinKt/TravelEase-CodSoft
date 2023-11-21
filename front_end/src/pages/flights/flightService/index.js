// flightService.js
import flightData from '../../fakeTravelData.json';

export const fetchFlightData = async () => {
  try {
    return flightData;
  } catch (error) {
    console.error('Error fetching flight data:', error);
    return null;
  }
};
