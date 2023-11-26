import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login_page";
import RegisterPage from "./components/register_page";
import MainPage from "./pages/main_page";
import CarDetailsPage from "./pages/car_hire/CarDetails";
import HotelDetailsPage from "./pages/hotels/hotelDetails";
import OneWayDetailsPage from "./components/one_way/one_way_details";
import RoundTripDetailsPage from "./components/round_trip/round_trip_details";
import MulticityDetailsPage from "./components/multi_city/multi_city_details";
import CarHire from "./pages/car_hire";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/" element={ <MainPage/> } />
        <Route path="/carHire" element={ <CarHire/> } />
        <Route path="/carDetails" element={ <CarDetailsPage/> } />
        <Route path="/hotelDetails" element={ <HotelDetailsPage/> } />
        <Route path="/OneWayDetails" element={ <OneWayDetailsPage/> } />
        <Route path="/RoundTripDetails" element={ <RoundTripDetailsPage/> } />
        <Route path="/MulticityDetails" element={ <MulticityDetailsPage/> } />

      </Routes>
    </>
  );
}

export default App;
