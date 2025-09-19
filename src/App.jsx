import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
import LogoParticles from "./components/LogoParticles";
import Map from "./components/Map";
import NavBar from "./components/NavBar";
import PhotoAlbum from "./components/PhotoAlbum";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="p-2 md:px-10 font-garamond">
      <NavBar />
      <Hero />
      <LogoClouds />
      <Services />
      <Testimonial />
      <Team />
      <Map />
      <Contact />
      <LogoParticles />
      <PhotoAlbum />
      <Footer />
    </div>
  );
}

export default App;
