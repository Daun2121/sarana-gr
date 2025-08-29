import "./App.css";
import Header from "./components/organisems/Header";
import Footer from "./components/organisems/Footer";
import HeroSection from "./sections/HeroSection";
import ServiceSection from "./sections/ServiceSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <ServiceSection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default App;
