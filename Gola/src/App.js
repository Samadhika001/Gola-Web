import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import SpDashboard from "./screens/ServiceProvider/SpDashboard";
import TrHome from "./screens/Traveler/TrHome";
import Bookings from"./screens/ServiceProvider/Booking";
import NewBooking from "./screens/ServiceProvider/NewBooking";
import PackagesList from "./screens/ServiceProvider/PackagesList";
import CreateService from "./screens/ServiceProvider/CreateService";
import TrHotels from "./screens/Traveler/TrHotels";
import TrTripTour from "./screens/Traveler/TrTripTour";
import TrTripList from "./screens/Traveler/TrTripList";
import TrTripCreate from "./screens/Traveler/TrTripCreate";
import TrPlaces from "./screens/Traveler/TrPlaces";
import TrCalender from "./screens/Traveler/TrCalender";
import TrProfile from "./screens/Traveler/TrProfile";
import TrChat from "./screens/Traveler/TrChat";
import TrToDo from "./screens/Traveler/TrToDo";
import TrHotelDetails from "./screens/Traveler/TrHotelDetails";
import TrPlaceDetails from "./screens/Traveler/TrPlaceDetails";
import PaymentGateway from "./screens/Traveler/PaymentGateway";
import TrFoods from "./screens/Traveler/TrFoods";
import TrPackage from "./screens/Traveler/TrPackage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/loginScreen" element={<LoginScreen />}></Route>
        <Route path="/SignupScreen" element={<SignupScreen />}></Route>
        <Route path="/SpDashboard" element={<SpDashboard />}></Route>
        <Route path="/Bookings" element={<Bookings />}></Route>
        <Route path="/PackagesList" element={<PackagesList />}></Route>
        <Route path="/CreateService" element={<CreateService />}></Route>
        <Route path="/NewBooking" element={<NewBooking />}></Route>

        <Route path="/TrHome" element={<TrHome />}></Route>
        <Route path="/TrHotels" element={<TrHotels />}></Route>
        <Route path="/TrTripTour" element={<TrTripTour />}></Route>
        <Route path="/TrTripList" element={<TrTripList />}></Route>
        <Route path="/TrTripCreate" element={<TrTripCreate />}></Route>
        <Route path="/TrPlaces" element={<TrPlaces />}></Route>
        <Route path="/TrCalender" element={<TrCalender />}></Route>
        <Route path="/TrProfile" element={<TrProfile />}></Route>
        <Route path="/TrChat" element={<TrChat />}></Route>
        <Route path="/TrToDo" element={<TrToDo />}></Route>
        <Route path="/TrToDo" element={<TrToDo />}></Route>
        <Route path="/TrHotels/:hotelId" element={<TrHotelDetails />} />
        <Route path="/TrPlaces/:placeId" element={<TrHotelDetails />} />
        <Route path="/TrPlaces/:placeId" element={<TrPlaceDetails />} />
        <Route path="/Payment" element={<PaymentGateway />} />
        <Route path="/TrFoods" element={<TrFoods />} />
        <Route path="/TrPackage" element={<TrPackage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;