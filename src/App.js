import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import FleetPage from "./Pages/FleetPage";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
