import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login_page";
import RegisterPage from "./components/register_page";
import Header from "./components/header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/register" element={ <RegisterPage/> } />
        {/* <Route path="/" element={ <Header/> } /> */}

      </Routes>
    </>
  );
}

export default App;
