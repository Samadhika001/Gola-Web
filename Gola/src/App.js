import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import SpDashboard from "./screens/ServiceProvider/SpDashboard";
import TrHome from "./screens/Traveler/TrHome";
import Bookings from"./screens/ServiceProvider/Booking";
import PackagesList from "./screens/ServiceProvider/PackagesList";
import CreateService from "./screens/ServiceProvider/CreateService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/loginScreen" element={<LoginScreen />}></Route>
        <Route path="/SignupScreen" element={<SignupScreen />}></Route>
        <Route path="/SpDashboard" element={<SpDashboard />}></Route>
        <Route path="/TrHome" element={<TrHome />}></Route>
        <Route path="/Bookings" element={<Bookings />}></Route>
        <Route path="/PackagesList" element={<PackagesList />}></Route>
        <Route path="/CreateService" element={<CreateService />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;