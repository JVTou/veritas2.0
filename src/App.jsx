import Contact from "./components/Contact";
import ElectricalPhotoAlbum from "./components/ElectricalPhotoAlbum";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
import LogoParticles from "./components/LogoParticles";
import NavBar from "./components/NavBar";
import PaintingPhotoAlbum from "./components/PaintingPhotoAlbum";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="p-2 md:px-10">
      <NavBar />
      <Hero />
      <LogoClouds />
      <Services />
      <Testimonial />
      <Team />
      <Contact />
      <LogoParticles />
      <ElectricalPhotoAlbum />
      <PaintingPhotoAlbum />
      <Footer />
    </div>
  );
}

export default App;
