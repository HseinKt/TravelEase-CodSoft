import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login_page";
import RegisterPage from "./components/register_page";
import MainPage from "./pages/main_page";
import CarDetailsPage from "./pages/car_hire/CarDetails";
import HotelDetailPage from "./pages/hotels/hotelDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/register" element={ <RegisterPage/> } />
        <Route path="/" element={ <MainPage/> } />
        <Route path="/carDetails" element={ <CarDetailsPage/> } />
        <Route path="/hotelDetails" element={ <HotelDetailPage/> } />
      </Routes>
    </>
  );
}

export default App;
