import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ChooseTypeScreen from "./screens/ChooseTypeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ServiceReg1 from "./screens/ServiceReg1";
import UserDetails from "./screens/UserDetails";
import BusinessDetails from "./screens/UserDetails";
import Success from "./screens/Success";
import SpDashboard from "./screens/ServiceProvider/SpDashboard";
import ViewService from "./screens/ServiceProvider/ViewService";
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
import TrFoodDetails from "./screens/Traveler/TrFoodDetails";
import PaymentGateway from "./screens/Traveler/PaymentGateway";
import TrFoods from "./screens/Traveler/TrFoods";
import TrPackage from "./screens/Traveler/TrPackage";
import TrSearchResult from "./screens/Traveler/TrSearchResult";
import TrViewService from "./screens/Traveler/TrViewService";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/ChooseTypeScreen" element={<ChooseTypeScreen />}></Route>
        <Route path="/loginScreen" element={<LoginScreen />}></Route>
        <Route path="/SignupScreen" element={<SignupScreen />}></Route>
        <Route path="/ServiceReg1" element={<ServiceReg1 />}></Route>
        <Route path="/UserDetails" element={<UserDetails />}></Route>
        <Route path="/BusinessDetails" element={<BusinessDetails />}></Route>
        <Route path="/Success" element={<Success />}></Route>
        <Route path="/SpDashboard" element={<SpDashboard />}></Route>
        <Route path="/Bookings" element={<Bookings />}></Route>
        <Route path="/PackagesList" element={<PackagesList />}></Route>
        <Route path="/CreateService" element={<CreateService />}></Route>
        <Route path="/NewBooking" element={<NewBooking />}></Route>
        <Route path="/ViewService" element={<ViewService />}></Route>

        <Route path="/TrHome/" element={<TrHome />}></Route>
        <Route path="/TrSearchResult" element={<TrSearchResult />}></Route>
        <Route path="/TrHotels" element={<TrHotels />}></Route>
        <Route path="/TrTripTour" element={<TrTripTour />}></Route>
        <Route path="/TrTripList" element={<TrTripList />}></Route>
        <Route path="/TrTripCreate/:accommodation_id" element={<TrTripCreate />}></Route>
        <Route path="/TrPlaces" element={<TrPlaces />}></Route>
        <Route path="/TrCalender" element={<TrCalender />}></Route>
        <Route path="/TrViewService/:accommodation_id" element={<TrViewService />} />
        <Route path="/TrProfile" element={<TrProfile />}></Route>
        <Route path="/TrChat" element={<TrChat />}></Route>
        <Route path="/TrToDo" element={<TrToDo />}></Route>
        <Route path="/TrToDo" element={<TrToDo />}></Route>
        <Route path="/TrHotels" element={<TrHotelDetails />} />
        <Route path="/TrPlaces/:placeId" element={<TrHotelDetails />} />
        <Route path="/Payment" element={<PaymentGateway />} />
        <Route path="/TrFoods" element={<TrFoods />} />
        <Route path="/TrFoods/:FoodId" element={<TrFoodDetails />} />
        <Route path="/TrPackage" element={<TrPackage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;