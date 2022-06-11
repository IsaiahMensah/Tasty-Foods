import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Aboutpage from "./components/pages/aboutpage/Aboutpage";
import Aboutchef from "./components/pages/aboutchef/AboutChef"
import Ourteam from './components/pages/ourteam/Ourteam'
import Feedback from "./components/pages/feedback/Feedback"
import Ordering from "./components/pages/onlineordering/Onlineorder"
import Shop from "./components/pages/shop/Shop"
import Menu from "./components/pages/menu/Menu"
import Reserve from "./components/pages/reservations/Reserve"
import Subscribe from "./components/subscribe/Subscribe";
import Signup from "./components/pages/signup/Signup"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/aboutchef" element={<Aboutchef />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/order" element={<Ordering />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserve" element={<Reserve />} />
        {/* <Route path="/signup" element={<Signup/>} /> */}
      </Routes>
      <Subscribe/>
    </>
  );
}

export default App;
