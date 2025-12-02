import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import DestinationsSection from "./components/Destinations";
import BookTripSection from "./components/BookTripSection";
import LogosSection from "./components/LogoSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <BookTripSection />
      <LogosSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default App;
