import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Venues from "./pages/Venues";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/Login/LoginModal";
import SingleVenue from "./components/Venue/Singlevenue/SingleVenue";
import ContinuePay from "./components/Venue/ContinuePay";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";
import Favorite from "./components/Venue/Favorite";
import Notification from "./components/Notification";
import Support from "./components/Support";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar onGetStartedClick={() => setShowModal(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/venues" element={<Venues />} />
  <Route path="/venues/mostviewed" element={<SingleVenue />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/venues/continue&pay" element={<ContinuePay />} />
        <Route path="/mybookings" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/help" element={<Support />} />






      </Routes>

      <Footer />
      <LoginModal show={showModal} onClose={() => setShowModal(false)} />
    </BrowserRouter>
  );
}

export default App;
