import React from 'react';
import Top_bar from './components/top_bar/Top_bar';
import Navbar from "./components/navbar/Navbar";
import Header from './components/header/Header';
import Form from "./components/form/Form";
import About from "./components/about/About";
import Why from './components/why/Why';
import Highlights from './components/highlights/Highlights';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";
import Brochure from './components/brochure/Brochure';
import LocationHighlights from './components/location_highlights/LocationHighlights';
import Chatbot from './components/chatbot/Chatbot';
// import Amenities from './components/amenities/Amenities';
import ThankYouPage from "./pages/thank_you/ThankYou"; 
import BottomBar from './components/bottom_bar/BottomBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/landing">
      <Routes>
        <Route
          path="/"
          element={
            <div id="Logo">
              <Top_bar />
              <Chatbot />
              <Brochure />
              <Navbar />
              <div id="Home"><Header /></div>
              <div id="Form"><Form /></div>
              <div id="About"><About /></div>
              <div id="Highlights"><Highlights /></div>
              <div id="Gallery"><Gallery /></div>
              {/* <div id="Amenities"><Amenities /></div> */}
              <div id="why"><Why /></div>
              {/* <div id="ProjectDetails"><ProjectDetails /></div> */}
              <div id="location-highlights"><LocationHighlights /></div>
              <div id="Contact"><Contact /></div>
              <Footer />
              <BottomBar />
            </div>
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
