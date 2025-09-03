import Contact from "./components/Contact";
import ConsultationPhotoAlbum from "./components/ConsultationPhotoAlbum";
import CCTVPhotoAlbum from "./components/CCTVPhotoAlbum";
import DataPhotoAlbum from "./components/DataPhotoAlbum";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ITPhotoAlbum from "./components/ITPhotoAlbum";
import LogoClouds from "./components/LogoClouds";
import LogoParticles from "./components/LogoParticles";
import NavBar from "./components/NavBar";
import SecurityPhotoAlbum from "./components/SecurityPhotoAlbum";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import WirelessPhotoAlbum from "./components/WirelessPhotoAlbum";

function App() {
  return (
    <div className="p-2 md:px-10 font-garamond">
      <NavBar />
      <Hero />
      <LogoClouds />
      <Services />
      <Testimonial />
      <Team />
      <Contact />
      <LogoParticles />
      <CCTVPhotoAlbum />
      <SecurityPhotoAlbum />
      <WirelessPhotoAlbum />
      <ITPhotoAlbum />
      <DataPhotoAlbum />
      <ConsultationPhotoAlbum />
      <Footer />
    </div>
  );
}

export default App;
